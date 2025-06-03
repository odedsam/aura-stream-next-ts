'use client';
import type { MovieData } from '@/types/components';
import { useState } from 'react';
import { Calendar, Globe, Star, Film, Music, Grid2X2 } from 'lucide-react';
import { Tag } from '@/app/components/ui/Tags';
import { IconLabel } from '@/app/components/ui/Labels';
import { CastBlock, RatingBlock } from '@/app/components/ui/Blocks';
import { MovieDetailsAPI } from '@/lib/collections';

const GenreDetailsSidebar = () => {
  const [movieData, setMovieData] = useState<MovieData>(MovieDetailsAPI);

  const updateMovieData = <K extends keyof MovieData>(field: K, value: MovieData[K]): void => {
    setMovieData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-quaternary p-6 rounded-lg border-2 border-quinary max-w-2xl space-y-6">
      <div>
        <IconLabel icon={Calendar} label="Released Year" />
        <div className="flex items-center gap-3">
          <span className="text-white font-manrope text-2xl font-semibold">
            {movieData.releaseYear}
          </span>
        </div>
      </div>

      <div>
        <IconLabel icon={Globe} label="Available Languages" />
        <div className="flex flex-wrap gap-2">
          {movieData.languages.map((language, index) => (
            <Tag key={index}>{language}</Tag>
          ))}
        </div>
      </div>

      <div>
        <IconLabel icon={Star} label="Ratings" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {movieData.ratings.map((rating, index) => (
            <RatingBlock
              key={index}
              platform={rating.platform}
              rating={rating.rating}
              maxRating={rating.maxRating}
            />
          ))}
        </div>
      </div>

      <div>
        <IconLabel icon={Grid2X2} label="Genres" />
        <div className="flex flex-wrap gap-2">
          {movieData.genres.map((genre, index) => (
            <Tag key={index}>{genre}</Tag>
          ))}
        </div>
      </div>

      <CastBlock title="Director" members={movieData.director} icon={Film} />
      <CastBlock title="Music" members={movieData.music} icon={Music} />
    </div>
  );
};

export default GenreDetailsSidebar;
