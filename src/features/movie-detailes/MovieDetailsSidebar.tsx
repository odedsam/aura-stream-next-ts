"use client";

import React, { useState } from 'react';
import { Calendar, Globe, Star, Film, Music, User } from 'lucide-react';

// Type Definitions
type IconComponent = React.ComponentType<{ className?: string }>;

interface IconLabelProps {
  icon: IconComponent;
  label: string;
  className?: string;
}

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'language' | 'genre';
}

interface RatingData {
  platform: string;
  rating: number;
  maxRating?: number;
}

interface RatingBlockProps extends RatingData {}

interface CastMember {
  name: string;
  country: string;
  image?: string | null;
}

interface CastBlockProps {
  title: string;
  members: CastMember[];
  icon: IconComponent;
}

interface MovieData {
  releaseYear: number;
  languages: string[];
  ratings: RatingData[];
  genres: string[];
  director: CastMember[];
  music: CastMember[];
}

// Reusable Icon Label Component
const IconLabel: React.FC<IconLabelProps> = ({ icon: Icon, label, className = "" }) => (
  <div className={`flex items-center gap-2 mb-3 ${className}`}>
    <Icon className="w-5 h-5 text-gray-def" />
    <h3 className="text-gray-def text-sm font-medium">{label}</h3>
  </div>
);

// Reusable Tag Component
const Tag: React.FC<TagProps> = ({ children, variant = "default" }) => {
  const variants: Record<TagProps['variant'] & string, string> = {
    default: "bg-gray-800 text-gray-300 border-gray-700",
    language: "bg-blue-900/30 text-blue-300 border-blue-700/50",
    genre: "bg-purple-900/30 text-purple-300 border-purple-700/50"
  };

  return (
    <span className={`px-3 py-1 rounded-md text-sm border ${variants[variant]} inline-block`}>
      {children}
    </span>
  );
};

// Rating Block Component
const RatingBlock: React.FC<RatingBlockProps> = ({ platform, rating, maxRating = 5 }) => {
  const renderStars = (): React.ReactElement[] => {
    const stars: React.ReactElement[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < maxRating; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} className="w-4 h-4 fill-red-500/50 text-red-500" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-600" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
      <h4 className="text-white font-semibold mb-2">{platform}</h4>
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {renderStars()}
        </div>
        <span className="text-white font-medium">{rating}</span>
      </div>
    </div>
  );
};

// Cast/Crew Block Component
const CastBlock: React.FC<CastBlockProps> = ({ title, members, icon: Icon }) => (
  <div className="space-y-3">
    <IconLabel icon={Icon} label={title} />
    <div className="space-y-3">
      {members.map((member, index) => (
        <div key={index} className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700">
          <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
            {member.image ? (
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-6 h-6 text-gray-500" />
              </div>
            )}
          </div>
          <div>
            <h4 className="text-white font-medium">{member.name}</h4>
            <p className="text-gray-def text-sm">From {member.country}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main Smart Movie Details Component
const MovieDetailsSidebar: React.FC = () => {
  const [movieData, setMovieData] = useState<MovieData>({
    releaseYear: 2022,
    languages: ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada'],
    ratings: [
      { platform: 'IMDb', rating: 4.5, maxRating: 5 },
      { platform: 'Streamvibe', rating: 4, maxRating: 5 }
    ],
    genres: ['Sci-Fi TV', 'Teen TV Shows', 'US TV Shows'],
    director: [
      { name: 'The Duffer Brothers', country: 'USA', image: null }
    ],
    music: [
      { name: 'Kyle Dixon', country: 'USA', image: null }
    ]
  });

  const updateMovieData = <K extends keyof MovieData>(field: K, value: MovieData[K]): void => {
    setMovieData(prev => ({ ...prev, [field]: value }));
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
          <span className="text-white text-2xl font-semibold">{movieData.releaseYear}</span>
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
            <Tag key={index} variant="language">{language}</Tag>
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
            <Tag key={index} variant="genre">{genre}</Tag>
          ))}
        </div>
      </div>

      {/* Director Section */}
      <CastBlock
        title="Director"
        members={movieData.director}
        icon={Film}
      />

      {/* Music Section */}
      <CastBlock
        title="Music"
        members={movieData.music}
        icon={Music}
      />

      {/* Smart Controls */}
      <div className="border-t border-gray-700 pt-4">
        <h4 className="text-gray-def text-sm font-medium mb-3">Quick Actions</h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={incrementYear}
            className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
            type="button"
          >
            Next Year
          </button>
          <button
            onClick={addLanguage}
            className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors"
            type="button"
          >
            Add Language
          </button>
          <button
            onClick={addGenre}
            className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition-colors"
            type="button"
          >
            Add Genre
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSidebar;
