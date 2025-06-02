'use client';

import { useEffect } from 'react';
import type { GenreCarouselProps, GenreCardProps } from '@/types';
import { cn } from '@/lib/utils';
import { GenreCarouselHeader, GenreCarouselPanel, GenreCarouselFooter } from '@/app/components/sliders/carousels/Partials';
import { GenreCard } from '@/app/components/cards/GenreCard';
import { PaginationProvider, usePagination } from '@/providers/PaginationProvider';

const GenreCarouselInner = ({
  title,
  items,
  onSlide,
  itemsPerSlide = 3,
  className,
  titleClassName,
  itemClassName,
  showControls = true,
}: GenreCarouselProps) => {
  const { currentIndex, setCurrentIndex, totalSlides, setTotalSlides } = usePagination();

  useEffect(() => {
    setTotalSlides(Math.ceil(items.length / itemsPerSlide));
  }, [items.length, itemsPerSlide, setTotalSlides]);

  useEffect(() => {
    onSlide?.(currentIndex);
  }, [currentIndex, onSlide]);

  const getCurrentSlideItems = () => {
    const startIndex = currentIndex * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    return items.slice(startIndex, endIndex);
  };

  const currentItems = getCurrentSlideItems();

  return (
    <div className={cn('font-manrope', className)}>
      <GenreCarouselHeader
        title={title}
        showControls={showControls}
        totalSlides={totalSlides}
        onSlideChange={setCurrentIndex}
        titleClassName={titleClassName}
      />

      <GenreCarouselPanel className="">
        {currentItems.map((item: GenreCardProps, index) => (
          <GenreCard key={item.id || `item-${currentIndex}-${index}`} {...item} className={cn('grid gap-4', itemClassName)} />
        ))}
      </GenreCarouselPanel>

      <GenreCarouselFooter currentIndex={currentIndex} itemsPerSlide={itemsPerSlide} totalItems={items.length} />
    </div>
  );
};

export const GenreCarousel = (props: GenreCarouselProps) => (
  <PaginationProvider>
    <GenreCarouselInner {...props} />
  </PaginationProvider>
);
