'use client';

import type { NavigationBlockComponentProps, NavigationBlockProps, RatingBlockProps } from '@/types/components';
import { cn, formatRating } from '@/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Buttons';
import { StarRating } from '@/components/common/StarRating';

export const RatingBlock = ({ platform, rating, maxRating = 5 }: RatingBlockProps) => {
  return (
    <div className="bg-primary p-4 rounded-lg border-2 border-quinary">
      <h4 className="text-white font-semibold mb-2">{platform}</h4>
      <div className="flex items-center gap-2">
        <StarRating rating={rating} maxRating={maxRating} color="red-def" />
        <span className="text-white font-medium">{formatRating(rating)}</span>
      </div>
    </div>
  );
};

export function NavigationBlock({ className, children }: NavigationBlockProps) {
  return (
    <div className={cn('inline-flex bg-sec border-2 border-teriary rounded-lg p-1', className)}>
      {children}
    </div>
  );
}


export default function NavigationBlockComponent({
  currentIndex = 0,
  totalItems = 1,
  onPrevious,
  onNext,
  disabled = false,
  className,
}: NavigationBlockComponentProps) {
  const handlePrevious = () => {
    if (!disabled && currentIndex > 0 && onPrevious) {
      onPrevious();
    }
  };

  const handleNext = () => {
    if (!disabled && currentIndex < totalItems - 1 && onNext) {
      onNext();
    }
  };

  const isPreviousDisabled = disabled || currentIndex <= 0;
  const isNextDisabled = disabled || currentIndex >= totalItems - 1;

  return (
    <NavigationBlock className={className}>
      <Button variant="dark" onClick={handlePrevious} disabled={isPreviousDisabled}>
        <ChevronLeft size={20} />
      </Button>

      <Button variant="dark" onClick={handleNext} disabled={isNextDisabled}>
        <ChevronRight size={20} />
      </Button>
    </NavigationBlock>
  );
}
