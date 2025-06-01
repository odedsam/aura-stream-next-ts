'use client';

import type { GenreCarouselProps } from '../types';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { SliderControl } from '@/app/components/sliders/SliderControl';
import { GenreCard } from '@/app/components/cards/GenreCard';

export const GenreCarousel = ({
  title,
  items,
  onSlide,
  itemsPerSlide = 3,
  className,
  titleClassName,
  itemClassName = '',
  showControls = true,
  autoHeight = false,
}: GenreCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const updateCurrentSlide = (index: number) => {
    setCurrentIndex(index);
    onSlide?.(index);
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentIndex * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    return items.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentSlideItems();
  const genres = [
    { title: 'Action', images: ['1', '2', '3', '4'] },
    { title: 'Adventure', images: ['1', '2', '3', '4'] },
    { title: 'Comedy', images: ['1', '2', '3', '4'] },
    { title: 'Drama', images: ['1', '2', '3', '4'] },
    { title: 'Horror', images: ['1', '2', '3', '4'] },
  ];
  return (
    <div className={cn('space-y-6 font-manrope', className)}>
      <div className="flex items-center justify-between">
        <h2 className={cn('text-2xl font-bold', titleClassName)}>{title}</h2>
        {showControls && totalSlides > 1 && (
          <SliderControl totalItems={totalSlides} onSlideChange={updateCurrentSlide} className="ml-auto" />
        )}
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
                {genres.map((genre, index) => (
                  <GenreCard key={index} title={genre.title} images={genre.images} onClick={() => console.log(`Clicked on ${genre.title}`)} />
                ))}
              </div>

      {totalSlides > 1 && (
        <div className="flex justify-center items-center space-x-2 text-sm text-gray-def font-manrope">
          <span>
            Showing {currentIndex * itemsPerSlide + 1}-{Math.min((currentIndex + 1) * itemsPerSlide, items.length)} of {items.length}
          </span>
        </div>
      )}
    </div>
  );
};

// Usage examples:
export function GenreCarouselExamples() {
  const movieGenres = [
    { id: 1, title: 'Action Movies', image: '/action.jpg', description: 'High-octane thrills and excitement' },
    { id: 2, title: 'Comedy Films', image: '/comedy.jpg', description: 'Laugh-out-loud entertainment' },
    { id: 3, title: 'Drama Series', image: '/drama.jpg', description: 'Emotional storytelling at its best' },
    { id: 4, title: 'Sci-Fi Adventures', image: '/scifi.jpg', description: 'Explore the unknown' },
    { id: 5, title: 'Horror Thrillers', image: '/horror.jpg', description: 'Spine-chilling experiences' },
    { id: 6, title: 'Romance Stories', image: '/romance.jpg', description: 'Heartwarming love stories' },
  ];

  const musicGenres = [
    { id: 1, title: 'Rock', description: 'Classic and modern rock hits' },
    { id: 2, title: 'Pop', description: 'Top chart hits and favorites' },
    { id: 3, title: 'Jazz', description: 'Smooth and sophisticated sounds' },
    { id: 4, title: 'Hip Hop', description: 'Urban beats and rhythms' },
  ];

  return (
    <div className="space-y-12 p-8">
      {/* Movie genres with images */}
      <GenreCarousel
        title="Popular Movie Genres"
        items={movieGenres}
        itemsPerSlide={3}
        onSlide={(index) => console.log('Movie slide:', index)}
      />

      {/* Music genres without images */}
      <GenreCarousel
        title="Music Categories"
        items={musicGenres}
        itemsPerSlide={4}
        className="bg-gray-50 p-6 rounded-lg"
        titleClassName="text-blue-600"
        itemClassName="bg-blue-50 border-blue-200 border"
        onSlide={(index) => console.log('Music slide:', index)}
      />

      {/* Small carousel without controls */}
      <GenreCarousel title="Featured Items" items={movieGenres.slice(0, 2)} itemsPerSlide={2} showControls={false} />
    </div>
  );
}
