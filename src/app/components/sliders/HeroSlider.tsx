'use client';

import { useState, useEffect } from 'react';
import { Play, Plus, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  genre?: string;
  rating?: string;
  year?: number;
}

interface HeroSliderProps {
  movies: Movie[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export const HeroSlider = ({
  movies,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
}: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying || movies.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movies.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, movies.length, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!movies.length) return null;

  const currentMovie = movies[currentSlide];

  return (
    <div className={cn('relative w-full', className)}>
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={currentMovie.image}
            alt={currentMovie.title || 'hey'}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl lg:max-w-3xl">
              {/* Movie Info */}
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  {currentMovie.title}
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed max-w-xl">
                  {currentMovie.description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors duration-200 text-sm lg:text-base">
                    <Play className="w-4 h-4 lg:w-5 lg:h-5 fill-white" />
                    Play Now
                  </button>

                  <button className="flex items-center justify-center gap-2 bg-gray-800/80 hover:bg-gray-700/80 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold transition-colors duration-200 text-sm lg:text-base backdrop-blur-sm">
                    <Plus className="w-4 h-4 lg:w-5 lg:h-5" />
                    Add to List
                  </button>

                  <button className="flex items-center justify-center gap-2 bg-gray-800/80 hover:bg-gray-700/80 text-white px-4 lg:px-6 py-3 lg:py-4 rounded-lg font-semibold transition-colors duration-200 backdrop-blur-sm">
                    <Volume2 className="w-4 h-4 lg:w-5 lg:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {movies.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm">
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm">
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </>
        )}

        {/* Slide Indicators */}
        {movies.length > 1 && (
          <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {movies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-red-600 w-6 lg:w-8' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}

        {/* Mobile Play/Pause Control */}
        {movies.length > 1 && (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-6 right-4 lg:hidden w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm">
            {isPlaying ? (
              <div className="w-3 h-3 flex gap-0.5">
                <div className="w-1 h-3 bg-white"></div>
                <div className="w-1 h-3 bg-white"></div>
              </div>
            ) : (
              <Play className="w-4 h-4 fill-white" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
