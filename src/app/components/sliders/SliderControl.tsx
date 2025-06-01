'use client';

import { useState } from 'react';
import { NavigationBlock } from '../ui/Blocks';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Buttons';
import { cn } from '@/lib/utils';
import { SliderIndicator } from './SliderIndicator';
import { SliderControlProps } from './types';


export const SliderControl = ({
  totalItems,
  initialIndex = 0,
  onSlideChange,
  className,
  navigationClassName,
  buttonClassName,
  indicatorProps,
  showIndicator = true,
  loop = true,
  disabled = false,
}: SliderControlProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleIndexChange = (newIndex: number) => {
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
  };

  const handlePrevious = () => {
    if (disabled) return;

    const newIndex = currentIndex > 0 ? currentIndex - 1 : loop ? totalItems - 1 : currentIndex;

    handleIndexChange(newIndex);
  };

  const handleNext = () => {
    if (disabled) return;

    const newIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : loop ? 0 : currentIndex;

    handleIndexChange(newIndex);
  };

  const handleDotClick = (index: number) => {
    if (disabled) return;
    handleIndexChange(index);
  };

  const isPreviousDisabled = disabled || (!loop && currentIndex === 0);
  const isNextDisabled = disabled || (!loop && currentIndex === totalItems - 1);

  return (
    <div className={className}>
      <NavigationBlock className={cn('w-auto px-4 py-4 rounded-xl border-2 border-teriary', navigationClassName)}>
        <Button
          variant="dark"
          className={cn('p-4 rounded-sm bg-teriary border-quinary', buttonClassName)}
          onClick={handlePrevious}
          disabled={isPreviousDisabled}>
          <ArrowLeft />
        </Button>

        {showIndicator && (
          <SliderIndicator
            currentIndex={currentIndex}
            totalItems={totalItems}
            className="px-4"
            dotSize="md"
            activeColor="bg-red-500"
            inactiveColor="bg-gray-600"
            onDotClick={handleDotClick}
            {...indicatorProps}
          />
        )}

        <Button
          variant="dark"
          className={cn('p-4 rounded-sm bg-teriary border-quinary', buttonClassName)}
          onClick={handleNext}
          disabled={isNextDisabled}>
          <ArrowRight />
        </Button>
      </NavigationBlock>
    </div>
  );
};

