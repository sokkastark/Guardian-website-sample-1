import { useState, useEffect, useRef } from 'react';

/**
 * useMouseParallax
 * Smooth, rAF-throttled normalized coordinates tracking (-1 to 1).
 * Supports:
 * 1. Desktop Mouse Movement (mousemove)
 * 2. Mobile Sensors (deviceorientation gyroscope / accelerometer)
 * 3. Mobile Touch Dragging (touchmove)
 * 4. Ambient idle floating drift fallback
 */
export function useMouseParallax(damping = 0.08) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(null);
  const hasUserInteraction = useRef(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let time = 0;

    // 1. Mouse movement (Desktop)
    const handleMouseMove = (e) => {
      hasUserInteraction.current = true;
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth) * 2 - 1;
      const normY = (e.clientY / innerHeight) * 2 - 1;
      targetRef.current = {
        x: Math.max(-1, Math.min(1, normX)),
        y: Math.max(-1, Math.min(1, normY)),
      };
    };

    // 2. Mobile Device Sensors (Gyroscope / Accelerometer)
    const handleDeviceOrientation = (e) => {
      if (e.gamma === null || e.beta === null) return;
      hasUserInteraction.current = true;

      // gamma is roll: -30 to +30 deg typical portrait tilt
      const normX = Math.max(-1, Math.min(1, e.gamma / 22));
      // beta is pitch: portrait natural hold is around 40-50 deg
      const normY = Math.max(-1, Math.min(1, (e.beta - 45) / 22));

      targetRef.current = { x: normX, y: normY };
    };

    // 3. Mobile Touch Move (Swipe / Drag)
    const handleTouchMove = (e) => {
      if (!e.touches || e.touches.length === 0) return;
      hasUserInteraction.current = true;
      const touch = e.touches[0];
      const { innerWidth, innerHeight } = window;
      const normX = (touch.clientX / innerWidth) * 2 - 1;
      const normY = (touch.clientY / innerHeight) * 2 - 1;
      targetRef.current = {
        x: Math.max(-1, Math.min(1, normX)),
        y: Math.max(-1, Math.min(1, normY)),
      };
    };

    // Request iOS orientation permission if required
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
      // Permission API available (iOS 13+)
      // Will auto-activate on first touch gesture
      const requestGyro = () => {
        DeviceOrientationEvent.requestPermission()
          .then((response) => {
            if (response === 'granted') {
              window.addEventListener('deviceorientation', handleDeviceOrientation, { passive: true });
            }
          })
          .catch(() => {});
        window.removeEventListener('touchstart', requestGyro);
      };
      window.addEventListener('touchstart', requestGyro, { passive: true });
    } else if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation, { passive: true });
    }

    // Attach listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 4. Smooth linear interpolation loop with ambient drift
    const updatePosition = () => {
      time += 0.02;

      // If user hasn't moved yet, apply gentle ambient floating drift
      let targetX = targetRef.current.x;
      let targetY = targetRef.current.y;

      if (!hasUserInteraction.current) {
        targetX += Math.sin(time * 0.7) * 0.2;
        targetY += Math.cos(time * 0.9) * 0.15;
      }

      currentRef.current.x += (targetX - currentRef.current.x) * damping;
      currentRef.current.y += (targetY - currentRef.current.y) * damping;

      setCoords({
        x: parseFloat(currentRef.current.x.toFixed(4)),
        y: parseFloat(currentRef.current.y.toFixed(4)),
      });

      animFrameId.current = requestAnimationFrame(updatePosition);
    };

    animFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [damping]);

  return coords;
}
