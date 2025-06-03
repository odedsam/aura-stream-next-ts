'use client';
import { useState, useEffect, useCallback } from 'react';

interface StreamLoaderProps {
  onLoadComplete?: () => void;
  brandName?: string;
  tagline?: string;
  children?: string;
  minLoadTime?: number;
}

type LoadingPhase = 'intro' | 'loading' | 'processing' | 'complete' | 'fadeout';

const streamingMessages = [
  'Connecting to servers...',
  'Loading your library...',
  'Preparing high-quality streams...',
  'Optimizing playback...',
  'Almost ready to stream...',
];

const StreamLoader = ({
  onLoadComplete,
  brandName = 'STREAMFLOW',
  tagline = 'Cinema at Your Fingertips',
  minLoadTime = 3000,
}: StreamLoaderProps) => {
  const [progress, setProgress] = useState<number>(0);
  const [phase, setPhase] = useState<LoadingPhase>('intro');
  const [currentMessage, setCurrentMessage] = useState<string>(streamingMessages[0]);
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [showContent, setShowContent] = useState(false);

  // Intro animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      setPhase('loading');
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Progress simulation
  const updateProgress = useCallback(() => {
    setProgress((prev) => {
      if (prev >= 95) {
        setPhase('complete');
        return 100;
      }

      const increment =
        prev < 30
          ? Math.random() * 12 + 3
          : prev < 70
            ? Math.random() * 8 + 2
            : Math.random() * 4 + 1;

      return Math.min(prev + increment, 95);
    });
  }, []);

  useEffect(() => {
    if (phase !== 'loading' && phase !== 'processing') return;

    const interval = setInterval(updateProgress, 200);
    return () => clearInterval(interval);
  }, [phase, updateProgress]);

  useEffect(() => {
    if (phase !== 'loading' && phase !== 'processing') return;

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => {
        const next = (prev + 1) % streamingMessages.length;
        setCurrentMessage(streamingMessages[next]);
        return next;
      });
    }, 1200);

    return () => clearInterval(messageInterval);
  }, [phase]);

  useEffect(() => {
    if (progress > 50 && phase === 'loading') {
      setPhase('processing');
    }
  }, [progress, phase]);

  useEffect(() => {
    if (phase === 'complete') {
      const timer = setTimeout(() => {
        setPhase('fadeout');
        setTimeout(() => onLoadComplete?.(), 800);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [phase, onLoadComplete]);

  if (phase === 'fadeout') return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1f1f1f] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#e50000]/20 to-transparent animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#ff3333]/20 to-transparent animate-pulse"
          style={{ animationDelay: '1s' }}
        />

        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-[#e50000]/10 to-[#ff3333]/20 animate-pulse"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + i * 0.5}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}

        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              linear-gradient(45deg, transparent 30%, rgba(229, 0, 0, 0.1) 50%, transparent 70%),
              linear-gradient(-45deg, transparent 30%, rgba(255, 51, 51, 0.1) 50%, transparent 70%)
            `,
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />
      </div>

      <div
        className={`relative z-10 h-full flex flex-col items-center justify-center transition-all duration-1000 ${
          showContent ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
        }`}>
        <div className="text-center mb-16">
          <div className="relative mb-6">
            <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ff3333] to-white tracking-wider">
              {brandName.split('').map((letter, index) => (
                <span
                  key={index}
                  className="inline-block animate-pulse hover:scale-110 transition-transform duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: '2s',
                  }}>
                  {letter}
                </span>
              ))}
            </h1>

            <div className="absolute inset-0 text-8xl font-black text-[#e50000]/20 blur-xl tracking-wider pointer-events-none">
              {brandName}
            </div>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#e50000]" />
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-[#e50000] to-[#ff3333] rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1" />
              </div>
              <div className="absolute inset-0 w-8 h-8 bg-[#e50000]/50 rounded-full animate-ping" />
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#e50000]" />
          </div>

          <p className="text-[#cccccc] text-2xl font-light tracking-wider opacity-90">{tagline}</p>
        </div>

        <div className="w-full max-w-lg space-y-8">
          <div className="relative mx-auto w-32 h-32">
            <div
              className="absolute inset-0 border-2 border-[#e50000]/30 rounded-full animate-spin"
              style={{ animationDuration: '3s' }}
            />

            <div
              className="absolute inset-4 border-2 border-[#ff3333]/50 rounded-full animate-spin"
              style={{ animationDirection: 'reverse', animationDuration: '2s' }}
            />

            <div className="absolute inset-12 bg-gradient-to-br from-[#e50000] via-[#ff3333] to-[#e50000] rounded-full animate-pulse" />

            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-[#1f1f1f] rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-45px)`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>

          <div className="relative">
            <div className="h-4 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#333]">
              <div
                className="h-full bg-gradient-to-r from-[#e50000] via-[#ff3333] to-[#e50000] rounded-full transition-all duration-700 ease-out relative overflow-hidden"
                style={{ width: `${progress}%` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-pulse" />

                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff6666] to-transparent opacity-60"
                  style={{
                    animation: 'slide 2s ease-in-out infinite',
                    backgroundSize: '200% 100%',
                  }}
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-[#999] font-medium text-lg transition-all duration-300">
                {currentMessage}
              </span>
              <span className="text-white font-bold text-2xl tabular-nums">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          <div className="flex justify-center space-x-3">
            {['Server', 'Library', 'Streams', 'Ready'].map((status, index) => (
              <div
                key={status}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                  progress > index * 25
                    ? 'bg-gradient-to-r from-[#e50000] to-[#ff3333] text-white shadow-lg shadow-[#e50000]/30'
                    : 'bg-[#333] text-[#666]'
                }`}>
                {status}
                {progress > index * 25 && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#e50000] to-[#ff3333] rounded-full opacity-20 animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-2 h-8 bg-gradient-to-t from-[#e50000] to-transparent rounded-full animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
};

export default StreamLoader;
