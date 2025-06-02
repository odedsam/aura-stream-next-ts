'use client';
import type { MovieData } from '@/types/components';
import { useState } from 'react';
import { Calendar, Globe, Star, Film, Music } from 'lucide-react';
import { Tag } from '@/app/components/ui/Tags';
import { IconLabel } from '@/app/components/ui/Labels';
import { CastBlock, RatingBlock } from '@/app/components/ui/Blocks';
import { MovieDetails } from '@/lib/collections';

const MovieDetailsSidebar = () => {
  const [movieData, setMovieData] = useState<MovieData>(MovieDetails);

  const updateMovieData = <K extends keyof MovieData>(
    field: K,
    value: MovieData[K],
  ): void => {
    setMovieData((prev) => ({ ...prev, [field]: value }));
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const year = parseInt(e.target.value);
    if (!isNaN(year)) {
      updateMovieData('releaseYear', year);
    }
  };

  const addLanguage = (): void => {
    const newLanguages = [...movieData.languages, 'Spanish'];
    updateMovieData('languages', newLanguages);
  };

  const addGenre = (): void => {
    const newGenres = [...movieData.genres, 'Action'];
    updateMovieData('genres', newGenres);
  };

  const incrementYear = (): void => {
    updateMovieData('releaseYear', movieData.releaseYear + 1);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 max-w-2xl space-y-6">
      {/* Release Year Section */}
      <div>
        <IconLabel icon={Calendar} label="Released Year" />
        <div className="flex items-center gap-3">
          <span className="text-white text-2xl font-semibold">
            {movieData.releaseYear}
          </span>
          <input
            type="number"
            value={movieData.releaseYear}
            onChange={handleYearChange}
            className="bg-gray-800 text-white px-2 py-1 rounded border border-gray-600 w-20"
            min="1900"
            max="2030"
          />
        </div>
      </div>

      {/* Available Languages Section */}
      <div>
        <IconLabel icon={Globe} label="Available Languages" />
        <div className="flex flex-wrap gap-2">
          {movieData.languages.map((language, index) => (
            <Tag key={index} variant="language">
              {language}
            </Tag>
          ))}
        </div>
      </div>

      {/* Ratings Section */}
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

      {/* Genres Section */}
      <div>
        <IconLabel icon={Film} label="Genres" />
        <div className="flex flex-wrap gap-2">
          {movieData.genres.map((genre, index) => (
            <Tag key={index} variant="genre">
              {genre}
            </Tag>
          ))}
        </div>
      </div>

      {/* Director Section */}
      <CastBlock title="Director" members={movieData.director} icon={Film} />

      {/* Music Section */}
      <CastBlock title="Music" members={movieData.music} icon={Music} />

      {/* Smart Controls */}
      <div className="border-t border-gray-700 pt-4">
        <h4 className="text-gray-def text-sm font-medium mb-3">
          Quick Actions
        </h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={incrementYear}
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
            type="button">
            Next Year
          </button>
          <button
            onClick={addLanguage}
            className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors"
            type="button">
            Add Language
          </button>
          <button
            onClick={addGenre}
            className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition-colors"
            type="button">
            Add Genre
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSidebar;
