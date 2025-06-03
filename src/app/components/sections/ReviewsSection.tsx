'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { castMembers, reviews } from '@/lib/collections';
import { Button } from '../ui/Buttons';
import { SliderIndicator } from '../sliders/SliderIndicator';
import CastCard from '../cards/CastCard';
import ReviewCard from '../cards/ReviewCard';

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
    <div className="bg-gray-900 text-white min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Description Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-300">Description</h2>
          <p className="text-gray-def leading-relaxed max-w-4xl">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments,
            terrifying supernatural forces and one strange little girl.
          </p>
        </section>

        {/* Cast Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-300">Cast</h2>
            <div className="flex gap-2">
              <button
                onClick={prevCast}
                disabled={currentCastIndex === 0}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextCast}
                disabled={currentCastIndex >= maxCastIndex}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
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
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-300">Reviews</h2>
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
