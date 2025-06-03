'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';
import { castMembers, reviews } from '@/lib/collections';
import { Button } from '../ui/Buttons';
import { SliderIndicator } from '../sliders/SliderIndicator';
import CastCard from '../cards/CastCard';
import ReviewCard from '../cards/ReviewCard';
import DescriptionCard from '../cards/DescriptionCard';

const MovieReviewComponent: React.FC = () => {
  const [currentCastIndex, setCastIndex] = useState(0);
  const [currentReviewIndex, setReviewIndex] = useState(0);

  const visibleCastMembers = 6;
  const maxCastIndex = Math.max(0, castMembers.length - visibleCastMembers);

  const nextCast = () => {
    setCastIndex((prev) => Math.min(prev + 1, maxCastIndex));
  };
  const prevCast = () => {
    setCastIndex((prev) => Math.max(prev - 1, 0));
  };
  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  };
  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <DescriptionCard description="description" />

        {/* Cast Section */}
        <section className="content-block-gray">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-300">Cast</h2>
            <div className="flex gap-2">
              <Button
                className="p-2 rounded-full bg-primary text-gray-def hover:bg-gray-700 transition-colors whitespace-normal h-auto"
                disabled={currentCastIndex === 0}
                onClick={prevCast}
                icon={<ArrowLeft className="w-5 h-5" />}
              />

              <Button
                className="p-2 rounded-full bg-primary text-gray-def hover:bg-gray-700 transition-colors whitespace-normal h-auto"
                disabled={currentCastIndex >= maxCastIndex}
                onClick={nextCast}
                icon={<ArrowRight className="w-5 h-5" />}
              />
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentCastIndex * (80 + 16)}px)` }}>
              {castMembers.map((member) => (
                <CastCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="content-block-gray p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-def">Reviews</h2>
            <Button icon={<Plus />} variant="black" className="border-1">
              Add Your Review
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {reviews.slice(currentReviewIndex, currentReviewIndex + 2).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            {/* Review Navigation */}
            <div className="flex items-center justify-center mt-6 gap-4">
              <Button
                className="p-2 rounded-full bg-primary text-gray-def hover:bg-gray-700 transition-colors whitespace-normal h-auto"
                onClick={prevReview}
                icon={<ArrowLeft className="w-5 h-5" />}
              />

              {/* Review Indicators */}
              <SliderIndicator
                currentIndex={currentReviewIndex}
                totalItems={reviews.length}
                className="px-1 md:px-4"
                activeColor="bg-red-500"
                inactiveColor="bg-gray-600"
                onDotClick={(index) => setReviewIndex(index)}
              />

              <Button
                className="p-2 rounded-full bg-primary text-gray-def hover:bg-gray-700 transition-colors whitespace-normal h-auto"
                onClick={nextReview}
                icon={<ArrowRight className="w-5 h-5" />}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieReviewComponent;
