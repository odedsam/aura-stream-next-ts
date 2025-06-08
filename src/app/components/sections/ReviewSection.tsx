'use client';

import type { ReviewAuthor } from '../cards/ReviewCard';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { Button, CarouselButton } from '../ui/Buttons';
import { useSlider } from '@/hooks/useSlider';
import { SliderIndicator } from '../sliders/SliderIndicator';
import ReviewCard from '../cards/ReviewCard';

interface ReviewsSectionProps {
  reviews: ReviewAuthor[];
  perPage?: number;
  onAddReview?: () => void;
  className?: string;
}

export const ReviewSection = ({
  reviews,
  perPage = 2,
  onAddReview,
  className,
}: ReviewsSectionProps) => {
  const { index, next, prev, goTo } = useSlider(reviews.length, perPage, true);

  if (!reviews.length) {
    return (
      <section className={cn('content-block-gray p-6', className)}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-def">Reviews</h2>
          <Button icon={<Plus />} variant="black" className="border-1" onClick={onAddReview}>
            Add Your Review
          </Button>
        </div>
        <p className="text-gray-def">No reviews yet. Be the first to add one!</p>
      </section>
    );
  }

  const visible = reviews.slice(index, index + perPage);
  if (visible.length < perPage && reviews.length > perPage) {
    visible.push(...reviews.slice(0, perPage - visible.length));
  }

  return (
    <section className={cn('content-block-gray p-6', className)}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-def">Reviews</h2>
        <Button icon={<Plus />} variant="black" className="border-1" onClick={onAddReview}>
          Add Your Review
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[200px]">
        {visible.map((review: ReviewAuthor, idx) => (
          <ReviewCard key={review.id || idx} review={review} />
        ))}
      </div>

      {reviews.length > perPage && (
        <div className="flex items-center justify-center mt-6 gap-4">
          <CarouselButton direction="prev" onClick={prev} />
          <SliderIndicator
            currentIndex={index}
            totalItems={reviews.length}
            className="px-1 md:px-4"
            activeColor="bg-red-500"
            inactiveColor="bg-gray-600"
            onDotClick={goTo}
          />
          <CarouselButton direction="next" onClick={next} />
        </div>
      )}
    </section>
  );
};
