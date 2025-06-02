'use client';
import React from 'react';
import { Play, Search, Menu } from 'lucide-react';
import { categories, moviesCatalog } from '@/config/mock';

const HomeHero = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Movie Grid Background */}

      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 p-4 h-full">
          {moviesCatalog.map((movie, index) => (
            <div
              key={movie.id}
              className="aspect-[2/3] rounded-lg overflow-hidden bg-gradient-to-br from-purple-600 via-red-500 to-orange-500 animate-pulse"
              style={{ animationDelay: `${index * 0.1}s`, animationDuration: '3s' }}>
              <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-2">
                <span className="text-white text-xs font-medium truncate">{movie.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight">
          The Best Streaming Experience
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With
          StreamVibe, you can enjoy a wide variety of content including the latest blockbusters, classic movies, popular TV shows, and more.
          You can also create your own watchlists, so you never miss a beat.
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center gap-3 mb-16">
          <Play className="w-5 h-5" />
          Start Watching Now
        </button>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default HomeHero;
