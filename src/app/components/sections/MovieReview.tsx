'use client';

import type { CrewPerson, MovieLanguages, OptionalCrewMember, Persona } from '@/types/components';
import { cn } from '@/lib/utils';
import { ReviewSection, CastSection } from '.';
import DescriptionCard from '@/app/components/cards/DescriptionCard';
import GenreCredits from '@/features/details/GenreCredits';

interface MovieData {
  id: number;
  title?: string;
  poster_path?: string | null;
  release_date: string;
  genres?: { id: number; name: string }[];
  spoken_languages?: MovieLanguages[];
  vote_average: number;
}

interface MovieReviewProps {
  className?: string;
  movieData: MovieData;
  cast: [];
  crew?: CrewPerson[];
  trailers?: any[];
  reviews?: any[];
  onAddReview?: () => void;
  description: string;
}

const getTMDBImageUrl = (path: string | null | undefined, size: 'w300' | 'w780') => {
  if (!path) return null;
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

const MovieReview = ({
  movieData,
  cast = [],
  crew = [],
  reviews: reviewsData = [],
  trailers,
  onAddReview,
  className,
  description,
}: MovieReviewProps) => {
  const roles = crew.reduce(
    (acc, member) => {
      if (member.job === 'Director') acc.director = member;
      if (member.job === 'Original Music Composer') acc.composer = member;
      return acc;
    },
    {} as { director?: OptionalCrewMember; composer?: OptionalCrewMember },
  );

  const { spoken_languages, vote_average, release_date, genres } = movieData;
  const director = roles.director;
  const composer = roles.composer;

  const moviePersonas: Persona[] = [
    {
      job: 'Director',
      name: director?.name || 'Unknown',
      profile_path: getTMDBImageUrl(director?.profile_path, 'w300') || '',
    },
    {
      job: 'Music',
      name: composer?.name || 'Unknown',
      profile_path: getTMDBImageUrl(composer?.profile_path, 'w300') || '',
    },
  ].filter((persona) => persona.name !== 'Unknown');

  const posterUrl = getTMDBImageUrl(movieData.poster_path, 'w780');

  return (
    <div className={cn('text-white', className)}>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-4 md:p-8">
        <div className="lg:col-span-3 space-y-8">
          <DescriptionCard className="p-6 md:p-12">
            <h2 className="text-xl font-semibold mb-4 text-gray-def">Description</h2>
            <p className="text-white leading-relaxed max-w-4xl">{description}</p>
          </DescriptionCard>
          <CastSection cast={cast} className="p-6 md:p-12" />
          <ReviewSection reviews={reviewsData} perPage={2} onAddReview={onAddReview} />
        </div>

        <aside className="w-full lg:col-span-1">
          <GenreCredits
            release_date={release_date || 'Unknown'}
            spoken_languages={spoken_languages || [{ name: 'EN' }]}
            genres={genres}
            vote_average={vote_average / 2}
            personas={moviePersonas}
          />
        </aside>
      </div>
    </div>
  );
};

export default MovieReview;
