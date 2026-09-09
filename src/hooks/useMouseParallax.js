import { useState, useEffect, useRef } from 'react';

/**
 * useMouseParallax
 * Smooth, rAF-throttled normalized mouse position tracking (-1 to 1).
 * Automatically disables on touch screens or when user prefers reduced motion.
 */
export function useMouseParallax(damping = 0.08) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    // Check for touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalize to -1 to +1 from center
      const normX = (e.clientX / innerWidth) * 2 - 1;
      const normY = (e.clientY / innerHeight) * 2 - 1;
      targetRef.current = { x: normX, y: normY };
    };

    const updatePosition = () => {
      // Linear interpolation (lerp) for buttery smooth motion
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * damping;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * damping;

      setCoords({
        x: parseFloat(currentRef.current.x.toFixed(4)),
        y: parseFloat(currentRef.current.y.toFixed(4)),
      });

      animFrameId.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [damping]);

  return coords;
}
