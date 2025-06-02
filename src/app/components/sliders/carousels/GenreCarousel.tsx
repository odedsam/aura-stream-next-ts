'use client';

import type { GenreCarouselProps, GenreCardProps } from '@/types';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { SliderControl } from '@/app/components/sliders/SliderControl';
import { GenreCard } from '@/app/components/cards/GenreCard';
import { ResultsSummary } from '../../common/ResultsSummary';

export const GenreCarousel = ({
  title,
  items,
  onSlide,
  itemsPerSlide = 3,
  className,
  titleClassName,
  itemClassName = '',
  showControls = true,
}: GenreCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const updateCurrentSlide = (index: number) => {
    setCurrentIndex(index);
    onSlide?.(index);
  };
  console.log('items:', items);
  const getCurrentSlideItems = () => {
    const startIndex = currentIndex * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    return items.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentSlideItems();

  return (
    <div className={cn('space-y-6 font-manrope', className)}>
      <div className="flex items-center justify-between">
        <h2 className={cn('text-2xl font-bold', titleClassName)}>{title}</h2>
        {showControls && totalSlides > 1 && (
          <SliderControl totalItems={totalSlides} onSlideChange={updateCurrentSlide} className="ml-auto" />
        )}
      </div>

      {currentItems.map((item: GenreCardProps, index) => (
        <GenreCard key={item.id || `item-${currentIndex}-${index}`} {...item} className={cn(itemClassName)} />
      ))}

      {totalSlides > 1 && (
        <div className="flex justify-center items-center space-x-2 text-sm text-gray-def">
          <ResultsSummary
            from={currentIndex * itemsPerSlide + 1}
            to={Math.min((currentIndex + 1) * itemsPerSlide, items.length)}
            total={items.length}
          />
        </div>
      )}
    </div>
  );
};
