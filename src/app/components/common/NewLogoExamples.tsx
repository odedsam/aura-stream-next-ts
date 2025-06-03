'use client';

import React, { useState } from 'react';

interface LogoProps {
  name: string;
  svg: React.ReactNode;
  id: string;
}

const LuxuryStreamingLogos: React.FC = () => {
  const [selectedLogo, setSelectedLogo] = useState<string | null>(null);

  const logos: LogoProps[] = [
    {
      id: 'luxe-stream',
      name: 'LUXE STREAM',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M50 10L70 30L50 50L30 30L50 10Z" fill="#e50000" stroke="white" strokeWidth="2"/>
          <path d="M25 40L35 50L50 65L65 50L75 40L50 75L25 40Z" fill="url(#gradient1)"/>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e50000"/>
              <stop offset="100%" stopColor="white"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: 'royal-vision',
      name: 'ROYAL VISION',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M20 60L30 40L40 50L50 35L60 50L70 40L80 60L75 70L25 70L20 60Z" fill="#e50000"/>
          <circle cx="30" cy="40" r="3" fill="white"/>
          <circle cx="50" cy="35" r="3" fill="white"/>
          <circle cx="70" cy="40" r="3" fill="white"/>
          <polygon points="45,45 55,45 50,55" fill="white"/>
        </svg>
      )
    },
    {
      id: 'prestige-play',
      name: 'PRESTIGE PLAY',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <circle cx="50" cy="50" r="35" stroke="#e50000" strokeWidth="3" fill="none"/>
          <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="2" fill="none"/>
          <polygon points="42,42 58,50 42,58" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'elite-cinema',
      name: 'ELITE CINEMA',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M30 25C30 25 70 25 70 40C70 55 30 55 30 70C30 70 70 70 70 70" stroke="#e50000" strokeWidth="4" fill="none"/>
          <circle cx="25" cy="25" r="3" fill="white"/>
          <circle cx="75" cy="70" r="3" fill="white"/>
        </svg>
      )
    },
    {
      id: 'platinum-stream',
      name: 'PLATINUM STREAM',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <rect x="20" y="30" width="60" height="40" rx="5" fill="none" stroke="#e50000" strokeWidth="3"/>
          <polygon points="35,45 50,40 50,60 35,55" fill="white"/>
          <polygon points="50,40 65,45 65,55 50,60" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'noir-vision',
      name: 'NOIR VISION',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M20 20L80 20L70 50L80 80L20 80L30 50Z" fill="#e50000"/>
          <circle cx="35" cy="35" r="4" fill="white"/>
          <circle cx="65" cy="35" r="4" fill="white"/>
          <path d="M40 60L60 60" stroke="white" strokeWidth="3"/>
        </svg>
      )
    },
    {
      id: 'crimson-play',
      name: 'CRIMSON PLAY',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <polygon points="30,25 70,50 30,75" fill="#e50000"/>
          <polygon points="35,35 60,50 35,65" fill="white"/>
        </svg>
      )
    },
    {
      id: 'ruby-stream',
      name: 'RUBY STREAM',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M50 15L65 35L50 55L35 35Z" fill="#e50000"/>
          <path d="M50 55L65 75L50 85L35 75Z" fill="white"/>
          <circle cx="50" cy="50" r="8" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'scarlet-vision',
      name: 'SCARLET VISION',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <circle cx="50" cy="50" r="30" fill="none" stroke="#e50000" strokeWidth="4"/>
          <path d="M35 35L65 65M65 35L35 65" stroke="white" strokeWidth="3"/>
          <circle cx="50" cy="50" r="8" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'cardinal-cinema',
      name: 'CARDINAL CINEMA',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <rect x="25" y="25" width="50" height="50" rx="10" fill="#e50000"/>
          <rect x="30" y="30" width="40" height="40" rx="5" fill="white"/>
          <polygon points="40,45 55,50 40,55" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'vermillion-stream',
      name: 'VERMILLION STREAM',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M50 20L60 40L80 40L65 55L70 75L50 65L30 75L35 55L20 40L40 40Z" fill="#e50000"/>
          <circle cx="50" cy="50" r="10" fill="white"/>
        </svg>
      )
    },
    {
      id: 'burgundy-play',
      name: 'BURGUNDY PLAY',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M30 30L70 30L70 50L50 70L30 50Z" fill="#e50000"/>
          <path d="M35 35L65 35L65 45L50 60L35 45Z" fill="white"/>
          <polygon points="45,40 55,45 45,50" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'cherry-vision',
      name: 'CHERRY VISION',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <circle cx="40" cy="40" r="20" fill="#e50000"/>
          <circle cx="60" cy="60" r="20" fill="white"/>
          <circle cx="50" cy="50" r="15" fill="#e50000"/>
          <polygon points="45,45 55,50 45,55" fill="white"/>
        </svg>
      )
    },
    {
      id: 'rose-cinema',
      name: 'ROSE CINEMA',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M50 25C35 25 25 35 25 50C25 65 35 75 50 75C65 75 75 65 75 50C75 35 65 25 50 25Z" fill="#e50000"/>
          <path d="M50 35C40 35 35 40 35 50C35 60 40 65 50 65C60 65 65 60 65 50C65 40 60 35 50 35Z" fill="white"/>
          <polygon points="45,45 55,50 45,55" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'garnet-stream',
      name: 'GARNET STREAM',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <polygon points="50,20 70,40 50,60 30,40" fill="#e50000"/>
          <polygon points="50,40 70,60 50,80 30,60" fill="white"/>
          <polygon points="45,50 55,55 45,60" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'crimson-elite',
      name: 'CRIMSON ELITE',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <rect x="30" y="30" width="40" height="40" rx="20" fill="#e50000"/>
          <rect x="35" y="35" width="30" height="30" rx="15" fill="white"/>
          <circle cx="50" cy="50" r="8" fill="#e50000"/>
          <polygon points="46,46 54,50 46,54" fill="white"/>
        </svg>
      )
    },
    {
      id: 'ruby-luxury',
      name: 'RUBY LUXURY',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M25 35L50 25L75 35L70 65L50 75L30 65Z" fill="#e50000"/>
          <path d="M35 40L50 35L65 40L62 60L50 65L38 60Z" fill="white"/>
          <polygon points="45,45 55,50 45,55" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'scarlet-premium',
      name: 'SCARLET PREMIUM',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M50 15L70 25L80 45L70 65L50 75L30 65L20 45L30 25Z" fill="#e50000"/>
          <circle cx="50" cy="50" r="15" fill="white"/>
          <polygon points="44,44 56,50 44,56" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'cardinal-luxury',
      name: 'CARDINAL LUXURY',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M40 20L60 20L75 35L75 55L60 70L40 70L25 55L25 35Z" fill="#e50000"/>
          <path d="M45 30L55 30L65 40L65 50L55 60L45 60L35 50L35 40Z" fill="white"/>
          <polygon points="45,45 55,50 45,55" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'cherry-elite',
      name: 'CHERRY ELITE',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <circle cx="50" cy="50" r="30" fill="#e50000"/>
          <path d="M30 50L50 30L70 50L50 70Z" fill="white"/>
          <polygon points="45,45 55,50 45,55" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'burgundy-vision',
      name: 'BURGUNDY VISION',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <rect x="20" y="35" width="60" height="30" rx="15" fill="#e50000"/>
          <rect x="25" y="40" width="50" height="20" rx="10" fill="white"/>
          <polygon points="35,45 50,50 35,55" fill="#e50000"/>
          <polygon points="50,45 65,50 50,55" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'rose-premium',
      name: 'ROSE PREMIUM',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M50 20L65 30L75 45L65 60L50 70L35 60L25 45L35 30Z" fill="#e50000"/>
          <circle cx="50" cy="45" r="12" fill="white"/>
          <polygon points="46,41 54,45 46,49" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'garnet-luxury',
      name: 'GARNET LUXURY',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <polygon points="50,15 70,25 80,45 70,65 50,75 30,65 20,45 30,25" fill="#e50000"/>
          <polygon points="50,25 65,32 72,48 65,58 50,65 35,58 28,48 35,32" fill="white"/>
          <polygon points="45,43 55,48 45,53" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'crimson-vision',
      name: 'CRIMSON VISION',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <circle cx="50" cy="50" r="35" fill="none" stroke="#e50000" strokeWidth="4"/>
          <polygon points="35,35 65,50 35,65" fill="#e50000"/>
          <polygon points="40,42 58,50 40,58" fill="white"/>
        </svg>
      )
    },
    {
      id: 'ruby-elite',
      name: 'RUBY ELITE',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M30 25L70 25L75 50L70 75L30 75L25 50Z" fill="#e50000"/>
          <path d="M35 35L65 35L68 50L65 65L35 65L32 50Z" fill="white"/>
          <polygon points="42,45 58,50 42,55" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'scarlet-stream',
      name: 'SCARLET STREAM',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M25 30L75 30L70 50L75 70L25 70L30 50Z" fill="#e50000"/>
          <polygon points="35,40 60,50 35,60" fill="white"/>
        </svg>
      )
    },
    {
      id: 'cardinal-stream',
      name: 'CARDINAL STREAM',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <circle cx="50" cy="50" r="30" fill="#e50000"/>
          <rect x="35" y="35" width="30" height="30" rx="5" fill="white"/>
          <polygon points="42,42 58,50 42,58" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'cherry-premium',
      name: 'CHERRY PREMIUM',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <path d="M50 20L70 30L80 50L70 70L50 80L30 70L20 50L30 30Z" fill="#e50000"/>
          <path d="M50 30L65 37L72 50L65 63L50 70L35 63L28 50L35 37Z" fill="white"/>
          <circle cx="50" cy="50" r="5" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'burgundy-elite',
      name: 'BURGUNDY ELITE',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <rect x="25" y="25" width="50" height="50" rx="25" fill="#e50000"/>
          <rect x="32" y="32" width="36" height="36" rx="18" fill="white"/>
          <polygon points="42,42 58,50 42,58" fill="#e50000"/>
        </svg>
      )
    },
    {
      id: 'rose-vision',
      name: 'ROSE VISION',
      svg: (
        <svg viewBox="0 0 100 100" fill="none" className="w-20 h-20">
          <polygon points="50,20 65,35 65,65 50,80 35,65 35,35" fill="#e50000"/>
          <polygon points="50,30 60,40 60,60 50,70 40,60 40,40" fill="white"/>
          <polygon points="45,45 55,50 45,55" fill="#e50000"/>
        </svg>
      )
    }
  ];

  const handleLogoClick = (logoId: string): void => {
    setSelectedLogo(logoId === selectedLogo ? null : logoId);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-white text-center font-light tracking-[0.2em] mb-12">
          LUXURY STREAMING LOGOS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {logos.map((logo) => (
            <div
              key={logo.id}
              onClick={() => handleLogoClick(logo.id)}
              className={`
                bg-[#2a2a2a] rounded-2xl p-8 flex flex-col items-center justify-center h-52
                transition-all duration-300 cursor-pointer border border-[#333]
                hover:bg-[#333] hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10
                ${selectedLogo === logo.id ? 'ring-2 ring-[#e50000] bg-[#333]' : ''}
              `}
            >
              <div className="mb-4 transition-transform duration-300 hover:scale-110">
                {logo.svg}
              </div>
              <div className="text-white text-sm font-light tracking-widest text-center">
                {logo.name}
              </div>
            </div>
          ))}
        </div>

        {selectedLogo && (
          <div className="mt-12 text-center">
            <p className="text-white/70 text-lg">
              Selected: <span className="text-[#e50000] font-medium">
                {logos.find(logo => logo.id === selectedLogo)?.name}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LuxuryStreamingLogos;
