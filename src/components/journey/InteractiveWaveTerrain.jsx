import React, { useEffect, useRef } from 'react';

export default function InteractiveWaveTerrain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;

    // Smooth lerp mouse tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const parent = canvas.parentElement;

    const handleResize = () => {
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = parent.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    // Initial mouse center
    targetMouseX = width * 0.5;
    targetMouseY = height * 0.45;
    mouseX = targetMouseX;
    mouseY = targetMouseY;

    // Grid configuration for full-section data terrain
    const cols = 68;
    const rows = 44;
    let time = 0;

    const render = () => {
      time += 0.014;

      // Smooth lerp mouse tracking (buttery 60fps)
      mouseX += (targetMouseX - mouseX) * 0.07;
      mouseY += (targetMouseY - mouseY) * 0.07;

      ctx.clearRect(0, 0, width, height);

      // Global Living Spotlight Effect across the entire section canvas
      if (isHovering || Math.abs(mouseX - targetMouseX) > 2) {
        const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 320);
        mouseGlow.addColorStop(0, 'rgba(123, 63, 199, 0.16)');
        mouseGlow.addColorStop(0.35, 'rgba(56, 189, 248, 0.08)');
        mouseGlow.addColorStop(0.7, 'rgba(255, 122, 87, 0.03)');
        mouseGlow.addColorStop(1, 'rgba(19, 11, 38, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw particle terrain spanning full section (top to bottom)
      for (let r = 0; r < rows; r++) {
        const progressZ = r / (rows - 1);
        const depthFactor = Math.pow(progressZ, 1.3);

        // Vertical baseline spanning from top (-10px) to bottom (height + 30px)
        const baseY = -10 + depthFactor * (height + 40);
        const spread = 1.06 + depthFactor * 0.48;

        for (let c = 0; c < cols; c++) {
          const progressX = c / (cols - 1);
          const screenX = width * 0.5 + (progressX - 0.5) * width * spread;

          // Gentle topographic waves (soft so it never distracts)
          const ridgeRight = Math.exp(-Math.pow((progressX - 0.74) * 3.4, 2)) * (48 * (1 - progressZ * 0.45));
          const ridgeLeft = Math.exp(-Math.pow((progressX - 0.22) * 3.6, 2)) * (38 * (1 - progressZ * 0.45));
          const bow = Math.pow((progressX - 0.5) * 2, 2) * (26 * (1 - progressZ * 0.6));

          const wave1 = Math.sin(progressX * 8.5 + time * 1.0) * 11;
          const wave2 = Math.cos(progressZ * 7.5 + time * 0.8) * 9;
          const wave3 = Math.sin((progressX * 5 + progressZ * 5.5) + time * 0.6) * 7;

          const terrainElevation = -(ridgeRight + ridgeLeft + bow) + wave1 + wave2 + wave3;

          // Interactive Mouse Mountain Elevation / Wave Ripple
          let mouseElevate = 0;
          let mouseProximity = 0;
          if (isHovering || Math.abs(mouseX - targetMouseX) > 1) {
            const dx = screenX - mouseX;
            const dy = (baseY + terrainElevation) - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 260;

            if (dist < maxDist) {
              mouseProximity = Math.cos((dist / maxDist) * Math.PI * 0.5);
              // Elevate the terrain upward smoothly under and around cursor
              mouseElevate = mouseProximity * 36;
            }
          }

          const finalScreenY = baseY + terrainElevation - mouseElevate;

          // Only render points within visible viewport
          if (screenX >= -10 && screenX <= width + 10 && finalScreenY >= -15 && finalScreenY <= height + 15) {
            // Subtle clinical data symbol variety on selected coordinates
            const isSpecialSymbol = (c * 5 + r * 7) % 13 === 0;
            const isDataDiamond = (c * 3 + r * 9) % 17 === 0;

            // Soft base opacity so it acts as an atmospheric backdrop
            const baseAlpha = 0.08 + depthFactor * 0.14;
            const alpha = Math.min(0.75, baseAlpha + mouseProximity * 0.42);

            ctx.save();
            ctx.translate(screenX, finalScreenY);

            if (isSpecialSymbol && mouseProximity > 0.15) {
              // Micro medical cross '+'
              ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
              ctx.lineWidth = 1;
              const s = 2.2;
              ctx.beginPath();
              ctx.moveTo(-s, 0);
              ctx.lineTo(s, 0);
              ctx.moveTo(0, -s);
              ctx.lineTo(0, s);
              ctx.stroke();
            } else if (isDataDiamond && mouseProximity > 0.15) {
              // Micro data diamond '◇'
              ctx.strokeStyle = `rgba(255, 122, 87, ${alpha})`;
              ctx.lineWidth = 0.9;
              const s = 1.8;
              ctx.beginPath();
              ctx.moveTo(0, -s);
              ctx.lineTo(s, 0);
              ctx.lineTo(0, s);
              ctx.lineTo(-s, 0);
              ctx.closePath();
              ctx.stroke();
            } else {
              // Ethereal round dot
              const baseRadius = 0.7 + depthFactor * 0.9;
              const radius = Math.max(0.6, baseRadius + mouseProximity * 0.6);

              ctx.beginPath();
              ctx.arc(0, 0, radius, 0, Math.PI * 2);

              if (mouseProximity > 0.25) {
                // In cursor spotlight: luminous cyan
                ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
              } else if (terrainElevation < -15) {
                // Peak starlight
                ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
              } else {
                // Valley ambient violet
                ctx.fillStyle = `rgba(129, 140, 248, ${alpha})`;
              }

              ctx.fill();
            }

            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
    />
  );
}
