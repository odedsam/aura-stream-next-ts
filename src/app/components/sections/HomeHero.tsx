'use client';
import { Play } from 'lucide-react';
import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';


const HomeHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isLoaded, setIsLoaded] = useState(false);
  const timeRef = useRef(0);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setTimeout(() => setIsLoaded(true), 300);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const drawColorfulLiquid = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const centerX = width / 2;
      const centerY = height / 2.5;

      const layers = [
        { color: '#e50000', alpha: 0.4, scale: 1.0, speed: 1.0 },
        { color: '#ff3366', alpha: 0.3, scale: 0.8, speed: 0.8 },
        { color: '#ff6699', alpha: 0.25, scale: 0.6, speed: 1.2 },
        { color: '#cc0033', alpha: 0.35, scale: 1.2, speed: 0.6 },
      ];

      layers.forEach((layer, index) => {
        ctx.save();
        ctx.globalAlpha = layer.alpha;

        const gradient = ctx.createRadialGradient(
          centerX + mousePos.x * 100 - 50,
          centerY + mousePos.y * 100 - 50,
          0,
          centerX,
          centerY,
          Math.min(width, height) * 0.4 * layer.scale,
        );

        gradient.addColorStop(0, layer.color);
        gradient.addColorStop(0.3, layer.color + '80');
        gradient.addColorStop(0.7, layer.color + '40');
        gradient.addColorStop(1, layer.color + '00');

        ctx.fillStyle = gradient;

        ctx.beginPath();
        const points = 8;
        const baseRadius = Math.min(width, height) * 0.15 * layer.scale;

        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const wave1 =
            Math.sin(timeRef.current * 0.02 * layer.speed + angle * 2 + index) *
            0.3;
          const wave2 =
            Math.cos(
              timeRef.current * 0.015 * layer.speed + angle * 3 + index,
            ) * 0.2;
          const mouseInfluence =
            (mousePos.x - 0.5) * 0.4 + (mousePos.y - 0.5) * 0.3;

          const radius = baseRadius * (1 + wave1 + wave2 + mouseInfluence);
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            const prevAngle = ((i - 1) / points) * Math.PI * 2;
            const prevRadius =
              baseRadius *
              (1 +
                Math.sin(
                  timeRef.current * 0.02 * layer.speed + prevAngle * 2 + index,
                ) *
                  0.3);
            const prevX = centerX + Math.cos(prevAngle) * prevRadius;
            const prevY = centerY + Math.sin(prevAngle) * prevRadius;

            const cp1x = prevX + Math.cos(prevAngle + Math.PI / 2) * 25;
            const cp1y = prevY + Math.sin(prevAngle + Math.PI / 2) * 25;
            const cp2x = x + Math.cos(angle - Math.PI / 2) * 25;
            const cp2y = y + Math.sin(angle - Math.PI / 2) * 25;

            ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
          }
        }

        ctx.closePath();
        ctx.fill();
        ctx.restore();
      });
    },
    [mousePos],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      if (!canvasRef.current) return;

      const width = canvas.width;
      const height = canvas.height;

      const bgGradient = ctx.createRadialGradient(
        width * mousePos.x,
        height * mousePos.y,
        0,
        width / 2,
        height / 2,
        Math.max(width, height),
      );
      bgGradient.addColorStop(0, '#1a1a1a');
      bgGradient.addColorStop(0.3, '#0d0d0d');
      bgGradient.addColorStop(1, '#000000');

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      drawColorfulLiquid(ctx, width, height);

      timeRef.current += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [drawColorfulLiquid, mousePos]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-10 text-center space-y-2">
        <h1 className="text-3xl md:text-5xl text-white font-black uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,0,80,0.8)] animate-pulse">
          Aura Stream
        </h1>
        <p className="text-sm md:text-base text-pink-200 max-w-sm drop-shadow-md mx-auto italic">
          Streaming evolved. A new dimension of cinematic experience. Experience
          quantum-stitched realities in real time.
        </p>
      </div>

      <div className="absolute bottom-8 w-full flex justify-center z-10">
        <button
          className="group relative cursor-pointer px-8 py-3 border border-red-600/30 text-white font-light uppercase tracking-widest text-sm transition-all duration-500 hover:border-red-600 hover:bg-red-600/5"
          style={{
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)',
          }}>
          <Play className="w-4 h-4 inline-block mr-2" />
          <span className="relative z-10">Start Watching</span>
          <Link href="/browse" className="">
            <div className="absolute inset-0 bg-red-600/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
