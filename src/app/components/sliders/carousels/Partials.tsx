'use client';

import React from 'react';
import type { GenreCarouselHeaderProps, GenreCarouselFooterProps } from '@/types';
import { cn } from '@/lib/utils';
import { SliderControl } from '@/app/components/sliders/SliderControl';
import { ResultsSummary } from '@/app/components/common/ResultsSummary';

export const GenreCarouselHeader = ({ title, totalSlides, onSlideChange, titleClassName }: GenreCarouselHeaderProps) => (
  <div className="flex items-center justify-between font-manrope my-10">
    <h2 className={cn('text-lg sm:text-2xl font-bold', titleClassName)}>{title}</h2>
    <SliderControl totalItems={totalSlides} onSlideChange={onSlideChange} />
  </div>
);

export const GenreCarouselPanel = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('overflow-x-auto', className)} {...props}>
    <div className="font-manrope flex gap-4">{children}</div>
  </div>
);

export const GenreCarouselFooter = ({ currentIndex, itemsPerSlide, totalItems }: GenreCarouselFooterProps) => {
  const from = currentIndex * itemsPerSlide + 1;
  const to = Math.min((currentIndex + 1) * itemsPerSlide, totalItems);

  if (totalItems <= itemsPerSlide) return null;

  return (
    <div className="flex justify-center items-center space-x-2 text-sm text-gray-500">
      <ResultsSummary from={from} to={to} total={totalItems} />
    </div>
  );
};
