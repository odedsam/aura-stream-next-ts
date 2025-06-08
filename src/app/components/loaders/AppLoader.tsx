'use client';

import { useEffect, useRef } from 'react';
interface AltAppLoaderProps {
  onLoadComplete?: () => void;
}
const StreamingLoader = (onLoadComplete: AltAppLoaderProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      const { width, height } = canvas;

      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#7f1d1d');
      gradient.addColorStop(1, '#ef4444');

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const waveHeight = 40 + i * 20;
        for (let x = 0; x < width; x++) {
          const y =
            Math.sin((x + timeRef.current * (0.5 + i * 0.2)) * 0.005) * waveHeight +
            height / 2 +
            i * 10;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = gradient;
        ctx.globalAlpha = 0.03 + i * 0.02;
        ctx.lineWidth = 2 + i * 1.5;
        ctx.stroke();
        ctx.closePath();
      }

      timeRef.current += 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 w-full h-full bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <h1 className="text-red-600 text-3xl md:text-5xl font-extrabold tracking-widest animate-pulse drop-shadow-lg">
          AuraStream <br />
          Stream Beyond the Screen
        </h1>
        <p className="mt-2 text-red-500 text-base md:text-lg font-medium tracking-wide animate-fade">
          Crafting your experience...
        </p>
      </div>
    </div>
  );
};

export default StreamingLoader;
