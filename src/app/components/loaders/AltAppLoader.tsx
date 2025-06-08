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

export default function AltAppLoader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
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
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-red-500">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <h1 className="relative text-3xl md:text-5xl font-bold tracking-widest z-10">
        Enter the void of luxury.
      </h1>
    </div>
  );
}
