'use client';

import { castMembers, reviews } from '@/lib/collections';
import { cn } from '@/lib/utils';
import DescriptionCard from '../cards/DescriptionCard';
import { CastSection } from './CastSection';
import { RevSec } from './RevSection';

interface MovieData {
  title?: string;
  description?: string;
  [key: string]: any;
}

interface MovieReviewComponentProps {
  movieData?: MovieData;
  cast?: any[];
  reviews?: any[];
  onAddReview?: () => void;
  className?: string;
  description: string;
}

const MovRev = ({
  movieData,
  cast = castMembers,
  reviews: reviewsData = reviews,
  onAddReview,
  className,
  description,
}: MovieReviewComponentProps) => (
  <div className={cn('text-white p-4 md:p-8', className)}>
    <div className="max-w-6xl mx-auto space-y-8">
      <DescriptionCard description={description} />
      <CastSection cast={cast} />
      <RevSec reviews={reviewsData} perPage={1} onAddReview={onAddReview} />
    </div>
  </div>
);

export default MovRev;
