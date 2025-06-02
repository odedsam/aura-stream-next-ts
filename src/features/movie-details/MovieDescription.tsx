'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Play, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { seasonsEpisodesMock } from '@/config/mock';

export interface Episode {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  releaseDate?: string;
}

export interface SeasonMock {
  id: string;
  number: number;
  title: string;
  episodeCount: number;
  episodes: Episode[];
  description?: string;
}

export interface SeasonsEpisodesProps {
  seasons: SeasonMock[];
  currentSeason?: number;
  onEpisodePlay?: (seasonId: string, episodeId: string) => void;
}

// Episode Card Component
const EpisodeCard: React.FC<{
  episode: Episode;
  seasonId: string;
  onPlay?: (seasonId: string, episodeId: string) => void;
}> = ({ episode, seasonId, onPlay }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden hover:bg-gray-800/70 transition-colors group">
      <div className="flex flex-col sm:flex-row">
        {/* Thumbnail */}
        <div className="relative w-full sm:w-32 h-20 sm:h-24 flex-shrink-0">
          <Image
            src={episode.thumbnail}
            alt={episode.title}
            width={50}
            height={50}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onPlay?.(seasonId, episode.id)}
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors">
              <Play className="w-4 h-4 fill-current" />
            </button>
          </div>
          {/* Episode Number Badge */}
          <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {episode.number.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div className="flex-1">
              <h4 className="text-white font-semibold text-sm sm:text-base line-clamp-1">
                {episode.title}
              </h4>
              <p className="text-gray-def text-xs sm:text-sm mt-1 line-clamp-2">
                {episode.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-def text-xs">
              <Clock className="w-3 h-3" />
              <span>{episode.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Season Section Component
const SeasonSection: React.FC<{
  season: SeasonMock;
  isExpanded: boolean;
  onToggle: () => void;
  onEpisodePlay?: (seasonId: string, episodeId: string) => void;
}> = ({ season, isExpanded, onToggle, onEpisodePlay }) => {
  return (
    <div className="space-y-4">
      {/* Season Header */}
      <div
        className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-800/50 transition-colors"
        onClick={onToggle}>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-base sm:text-lg">
            Season {season.number.toString().padStart(2, '0')}
          </h3>
          <p className="text-gray-def text-sm">
            {season.episodeCount} Episodes
          </p>
          {season.description && (
            <p className="text-gray-500 text-xs mt-1 line-clamp-1 sm:line-clamp-none">
              {season.description}
            </p>
          )}
        </div>
        <div className="ml-4">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-def" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-def" />
          )}
        </div>
      </div>

      {/* Episodes List */}
      {isExpanded && (
        <div className="space-y-3 pl-0 sm:pl-4">
          {season.episodes.map((episode) => (
            <EpisodeCard
              key={episode.id}
              episode={episode}
              seasonId={season.id}
              onPlay={onEpisodePlay}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Seasons and Episodes Component
const SeasonsAndEpisodes: React.FC<SeasonsEpisodesProps> = ({
  seasons,
  currentSeason = 1,
  onEpisodePlay,
}) => {
  const [expandedSeasons, setExpandedSeasons] = useState<Set<string>>(
    new Set([seasons[currentSeason - 1]?.id]),
  );

  const toggleSeason = (seasonId: string) => {
    setExpandedSeasons((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(seasonId)) {
        newSet.delete(seasonId);
      } else {
        newSet.add(seasonId);
      }
      return newSet;
    });
  };

  const handleEpisodePlay = (seasonId: string, episodeId: string) => {
    console.log('Playing episode:', { seasonId, episodeId });
    onEpisodePlay?.(seasonId, episodeId);
  };

  return (
    <div className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-700 max-w-4xl">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-white text-xl sm:text-2xl font-bold mb-2">
          Seasons and Episodes
        </h2>
        <p className="text-gray-def text-sm">
          {seasons.length} Season{seasons.length !== 1 ? 's' : ''} •{' '}
          {seasons.reduce((total, season) => total + season.episodeCount, 0)}{' '}
          Episodes
        </p>
      </div>

      {/* Seasons List */}
      <div className="space-y-4">
        {seasons.map((season) => (
          <SeasonSection
            key={season.id}
            season={season}
            isExpanded={expandedSeasons.has(season.id)}
            onToggle={() => toggleSeason(season.id)}
            onEpisodePlay={handleEpisodePlay}
          />
        ))}
      </div>
    </div>
  );
};

// Demo Component with Sample Data
const SeasonsEpisodesDemo: React.FC = () => {
  const handleEpisodePlay = (seasonId: string, episodeId: string) => {
    alert(`Playing Season ${seasonId}, Episode ${episodeId}`);
  };

  return (
    <SeasonsAndEpisodes
      seasons={seasonsEpisodesMock}
      currentSeason={1}
      onEpisodePlay={handleEpisodePlay}
    />
  );
};

export default SeasonsEpisodesDemo;
