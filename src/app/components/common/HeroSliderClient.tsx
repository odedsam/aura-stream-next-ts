'use client';
import { useState, useEffect } from 'react';
import { cn } from '@/utils';
import { ChevronLeft, ChevronRight, X, PlayCircle, Bookmark, Heart } from 'lucide-react';
import { Button } from '@/app/components/ui/Buttons';
import { formatText } from '@/utils';
import { toast } from '@/lib/toast';
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

const HeroSliderClient = ({
  movies,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
}: HeroSliderProps) => {
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
    } else {
      toast.error('Trailer Not Available to your region');
    }
  };

  const closeTrailer = () => {
    setIsTrailerPlaying(false);
  };

  if (!movies.length) return null;
  const currentMovie = movies[currentSlide];

  return (
    <div className={cn('relative w-full', className)}>
      <div className="relative h-[100vh] overflow-hidden">
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
          <Image
            src={currentMovie.image}
            alt={currentMovie.title}
            fill
            priority
            className="max-md:object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div
          className="relative h-full top-36 flex items-center justify-center"
          style={{ display: isTrailerPlaying ? 'none' : 'flex' }}>
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl lg:max-w-3xl mt-18 space-y-6 text-white">
              <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {currentMovie.title}
              </h1>
              <p className="text-center text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                {formatText(currentMovie.description, 150)}
              </p>
              <div className="flex gap-2 justify-center items-center">
                <Button
                  onClick={playTrailer}
                  variant="red"
                  className="cursor-pointer"
                  icon={<PlayCircle className="w-5 h-5" />}>
                  Play Trailer
                </Button>
                <Button
                  variant={isSaved ? 'saved' : 'ghost'}
                  size="icon"
                  className="cursor-pointer"
                  onClick={() => setIsSaved(!isSaved)}
                  icon={<Bookmark className="w-5 h-5" />}
                  disabled={!currentMovie.trailerKey}
                />
                <Button
                  variant={isFavorited ? 'favorite' : 'ghost'}
                  size="icon"
                  className="cursor-pointer"
                  onClick={() => setIsFavorited(!isFavorited)}
                  icon={<Heart className="w-5 h-5" />}
                />
              </div>
            </div>
          </div>
        </div>

        {movies.length > 1 && !isTrailerPlaying && (
          <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={prevSlide}
              className="cursor-pointer w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm">
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            <div className="flex gap-2 overflow-x-auto max-w-[150px] lg:max-w-none scrollbar-none">
              {movies.slice(0, 10).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`cursor-pointer w-2 h-2 lg:w-3 lg:h-3 rounded-lg transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-red-600 w-6 lg:w-8'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="cursor-pointer w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm">
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSliderClient;
