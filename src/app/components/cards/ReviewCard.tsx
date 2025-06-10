'use client';

import { useState } from 'react';
import { formatRating, formatShowMore } from '@/utils';
import { StarRating } from '@/app/components/common/StarRating';

export type ReviewAuthor = {
  id: string;
  author: string;
  author_details: {
    avatar_path?: string | null;
    name: string;
    rating: number;
    username: string;
  };
  content: string;
  updated_at: string;
  url: string;
};

export interface ReviewProps {
  review: ReviewAuthor;
}

const ReviewCard = ({ review }: ReviewProps) => {
  const [showFull, setShowFull] = useState(false);
  const hasRating =
    typeof review.author_details.rating === 'number' && !isNaN(review.author_details.rating);

  const { isLong, displayed } = formatShowMore(review.content, showFull);

  return (
    <div className="content-block-black rounded-lg p-6 font-manrope">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-white mb-1">
            @{review.author_details.username || 'Anonymous'}
          </h3>
          <p className="text-gray-def text-sm">{review.author_details.name || 'Unknown'}</p>
        </div>
        <div className="flex items-center gap-2">
          {hasRating ? (
            <>
              <StarRating rating={review.author_details.rating} />
              <span className="text-white font-medium">
                {formatRating(review.author_details.rating)}
              </span>
            </>
          ) : (
            <span className="text-gray-def text-sm">Unrated</span>
          )}
        </div>
      </div>

      <p className="text-gray-300 leading-relaxed">{displayed}</p>

      {isLong && (
        <button
          onClick={() => setShowFull((prev) => !prev)}
          className="mt-2 text-sm text-blue-400 hover:underline">
          {showFull ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default ReviewCard;
