'use client';
import { useEffect, useRef, useState } from 'react';

const NUM_PARTICLES = 30;

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  alpha: number;
}
interface AppLoaderProps {
  onLoadComplete?: () => void;
}
export default function AppLoader({ onLoadComplete }: AppLoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      particlesRef.current = Array.from({ length: NUM_PARTICLES }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 2 + Math.random() * 3,
        speedX: -1 + Math.random() * 2,
        speedY: -0.5 + Math.random() * 1.5,
        alpha: 0.3 + Math.random() * 0.7,
      }));
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawParticles = () => {
      particlesRef.current.forEach((p) => {
        ctx.beginPath();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = '#ff1a1a';
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width || p.y > canvas.height) {
          p.x = Math.random() * canvas.width;
          p.y = 0;
        }
      });
      ctx.globalAlpha = 1;
    };

    const drawNoise = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4 * 200) {
        const gray = Math.random() * 30;
        data[i] = gray;
        data[i + 1] = gray;
        data[i + 2] = gray;
        data[i + 3] = 12;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      ctx.fillStyle = '#0a0000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawParticles();
      drawNoise();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [onLoadComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-red-500">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <h1 className="text-lg lg:text-xl text-red-500 font-black uppercase drop-shadow-[0_0_10px_rgba(255,0,80,0.8)] animate-pulse">
        Crafting your experience...
      </h1>
    </div>
  );
}
