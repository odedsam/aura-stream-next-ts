'use client';

import type { GenreCarouselProps, GenreCardProps } from '@/types';
import { useEffect, useMemo } from 'react';
import { cn } from '@/utils';
import {
  GenreCarouselHeader,
  GenreCarouselPanel,
  GenreCarouselFooter,
} from '@/components/sliders/carousels/Partials';

import { GenreCard } from '@/components/cards/GenreCard';
import { PaginationProvider, usePagination } from '@/providers/PaginationProvider';
import { useIsMobile } from '@/hooks/useIsMobile';

const GenreCarouselInner = ({
  title,
  items,
  className,
  titleClassName,
  bodyClassName,
  itemsPerSlide = 3,
  showControls = true,
  children,
  onSlide,
  onClick,
}: GenreCarouselProps) => {
  const { currentIndex, setCurrentIndex, totalSlides, setTotalSlides } = usePagination();
  const isMobile = useIsMobile(1024);
  const effectiveItemsPerSlide = isMobile ? 1 : itemsPerSlide;

  useEffect(() => {
    setTotalSlides(Math.ceil(items.length / effectiveItemsPerSlide));
    onSlide?.(currentIndex);
  }, [items.length, effectiveItemsPerSlide, currentIndex, onSlide, setTotalSlides]);

  const currentItems = useMemo(() => {
    const startIndex = currentIndex * effectiveItemsPerSlide;
    const endIndex = startIndex + effectiveItemsPerSlide;
    return items.slice(startIndex, endIndex);
  }, [currentIndex, items, effectiveItemsPerSlide]);

  return (
    <div className={cn('font-manrope', className)}>
      <GenreCarouselHeader
        title={title}
        showControls={showControls}
        totalSlides={totalSlides}
        onSlideChange={setCurrentIndex}
        titleClassName={titleClassName}
      />
      <GenreCarouselPanel className={cn('grid', bodyClassName)} onClick={onClick}>
        {children ?
           children
          : currentItems.map((item: GenreCardProps, index) => (
              <GenreCard
                key={item.id || `item-${currentIndex}-${index}`}
                {...item}
                className={cn('grid gap-4', bodyClassName)}
              />
            ))}
      </GenreCarouselPanel>

      <GenreCarouselFooter
        currentIndex={currentIndex}
        itemsPerSlide={effectiveItemsPerSlide}
        totalItems={items.length}
      />
    </div>
  );
};

export const GenreCarousel = (props: GenreCarouselProps) => (
  <PaginationProvider>
    <GenreCarouselInner {...props} />
  </PaginationProvider>
);
