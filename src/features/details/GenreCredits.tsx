'use client';

import type { Persona } from '@/app/components/cards/PersonaCard';
import { useState, useEffect } from 'react';
import { Calendar, Globe, Star, Grid2X2 } from 'lucide-react';
import { Tag } from '@/app/components/ui/Tags';
import { IconLabel } from '@/app/components/ui/Labels';
import { RatingBlock } from '@/app/components/ui/Blocks';
import { PersonaCard } from '@/app/components/cards/PersonaCard';

// type CrewMemeber = {
//   adult: boolean;
//   credit_id: string;
//   department: string;
//   job: string;
//   known_for_department: string;
//   popularity: number;
//   original_name?: string;
//   profile_path?: string;
// };

export type MovieGenres = {
  id: number;
  name: string;
};
export type MovieLanguages = {
  name: string;
};



export type GenreCreditsProps = {
  release_date: string;
  spoken_languages: MovieLanguages[];
  genres?: MovieGenres[];
  vote_average: number;
  personas: Persona[];
};

const GenreCredits = ({
  release_date,
  spoken_languages = [],
  genres = [],
  vote_average,
  personas = [],
}: GenreCreditsProps) => {
  const mockVoteAverage = vote_average  ?? Math.floor(Math.random() * 5) + 5;
  const ratingPlatforms = [
    { platform: 'IMDb', vote_average: mockVoteAverage },
    { platform: 'AuraStream', vote_average: Math.max(1, mockVoteAverage - 0.5) }, // Slightly lower but not below 1
  ];

  return (
    <div className="content-block-gray p-6 w-full space-y-6">
      <div>
        <IconLabel icon={Calendar} label="Released Year" />
        <div className="flex items-center gap-3">
          <span className="text-white font-manrope text-2xl font-semibold">
            {release_date?.split('-')[0]}
          </span>
        </div>
      </div>

      {spoken_languages && spoken_languages.length > 0 && (
        <div>
          <IconLabel icon={Globe} label="Available Languages" />
          <div className="flex flex-wrap gap-2">
            {spoken_languages.map((language, index) => (
              <Tag key={index}>{language.name}</Tag>
            ))}
          </div>
        </div>
      )}

      <div>
        <IconLabel icon={Star} label="Ratings" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ratingPlatforms.map(({ platform, vote_average }, index) => (
            <RatingBlock key={index} platform={platform} rating={vote_average} />
          ))}
        </div>
      </div>
      <div>
        <IconLabel icon={Grid2X2} label="Genres" />
        <div className="flex flex-wrap gap-2">
          {genres && genres.map((genre, index) => <Tag key={genre.id || index}>{genre.name}</Tag>)}
        </div>
      </div>

      <div>
        <PersonaCard personas={personas} />
      </div>
    </div>
  );
};

export default GenreCredits;
