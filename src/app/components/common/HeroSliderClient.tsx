'use client';
import { useState, useEffect } from 'react';
import {
  Play,
  ChevronLeft,
  ChevronRight,
  X,
  PlayCircle,
  Bookmark,
  Heart,
  Pause,
} from 'lucide-react';
import { Button } from '../ui/Buttons';
import Image from 'next/image';

export interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  trailerKey: string | null;
}

interface HeroSliderProps {
  movies: Movie[];
  onPlay?: (movie: Movie) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const HeroSliderClient: React.FC<HeroSliderProps> = ({
  movies,
  onPlay,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = '',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isTrailerPlaying, setIsTrailerPlaying] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    if (!isPlaying || movies.length <= 1 || isTrailerPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % movies.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, movies.length, autoPlayInterval, isTrailerPlaying]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % movies.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + movies.length) % movies.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  const playTrailer = () => {
    if (currentMovie.trailerKey) {
      setIsTrailerPlaying(true);
    }
  };

  const closeTrailer = () => {
    setIsTrailerPlaying(false);
  };

  if (!movies.length) return null;
  const currentMovie = movies[currentSlide];

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh] overflow-hidden">
        {isTrailerPlaying && currentMovie.trailerKey && (
          <div className="absolute inset-0 z-50 bg-black">
            <button
              onClick={closeTrailer}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200">
              <X className="w-6 h-6" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${currentMovie.trailerKey}?autoplay=1&controls=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}

        <div className="absolute inset-0" style={{ display: isTrailerPlaying ? 'none' : 'block' }}>
          <Image src={currentMovie.image} alt={currentMovie.title} fill priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div
          className="relative h-full flex items-center"
          style={{ display: isTrailerPlaying ? 'none' : 'flex' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl lg:max-w-3xl space-y-6 text-white">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {currentMovie.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                {currentMovie.description}
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={playTrailer}
                  variant="red"
                  icon={<PlayCircle className="w-5 h-5" />}>
                  Play Trailer
                </Button>
                <Button
                  variant={isSaved ? 'saved' : 'ghost'}
                  size="icon"
                  onClick={() => setIsSaved(!isSaved)}
                  icon={<Bookmark className="w-5 h-5" />}
                  disabled={!currentMovie.trailerKey}
                />
                <Button
                  variant={isFavorited ? 'favorite' : 'ghost'}
                  size="icon"
                  onClick={() => setIsFavorited(!isFavorited)}
                  icon={<Heart className="w-5 h-5" />}
                />
              </div>
            </div>
          </div>
        </div>

        {movies.length > 1 && !isTrailerPlaying && (
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

        {movies.length > 1 && !isTrailerPlaying && (
          <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {movies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 lg:w-3 lg:h-3 rounded-lg transition-all duration-200 ${
                  index === currentSlide ? 'bg-red-600 w-6 lg:w-8' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}

        {movies.length > 1 && !isTrailerPlaying && (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-6 right-4 lg:hidden w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroSliderClient;
