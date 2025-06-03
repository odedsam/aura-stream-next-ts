'use client';

import { cn } from '@/lib/utils';
import { CastSection } from './CastSection';
import { RevSec } from './RevSection';
import DescriptionCard from '../cards/DescriptionCard';

interface MovieData {
  id: number;
  title?: string;
  description?: string;
  poster_path?: string | null;
}

interface MovieReviewComponentProps {
  movieData: MovieData;
  cast?: any[];
  reviews?: any[];
  onAddReview?: () => void;
  className?: string;
  description: string;
}

const MovRev = ({
  movieData,
  cast = [],
  reviews: reviewsData = [],
  onAddReview,
  className,
}: MovieReviewComponentProps) => (
  <div className={cn('text-white p-4 md:p-8', className)}>
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold mb-2">{movieData.title}</h2>
        {movieData.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
            className="w-full max-w-xs rounded-xl shadow-lg"
          />
        )}
      </div>

      <DescriptionCard description={movieData.description ?? ''} />
      <CastSection cast={cast} />
      <RevSec reviews={reviewsData} perPage={2} onAddReview={onAddReview} />
    </div>
  </div>
);

export default MovRev;
