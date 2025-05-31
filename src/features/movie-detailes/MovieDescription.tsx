"use client";
import React, { useState } from 'react';
import { Play, Clock, ChevronDown, ChevronUp } from 'lucide-react';

// Type Definitions
interface Episode {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  releaseDate?: string;
}

interface Season {
  id: string;
  number: number;
  title: string;
  episodeCount: number;
  episodes: Episode[];
  description?: string;
}

interface SeasonsEpisodesProps {
  seasons: Season[];
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
          <img
            src={episode.thumbnail}
            alt={episode.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onPlay?.(seasonId, episode.id)}
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
            >
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
              <p className="text-gray-400 text-xs sm:text-sm mt-1 line-clamp-2">
                {episode.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
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
  season: Season;
  isExpanded: boolean;
  onToggle: () => void;
  onEpisodePlay?: (seasonId: string, episodeId: string) => void;
}> = ({ season, isExpanded, onToggle, onEpisodePlay }) => {
  return (
    <div className="space-y-4">
      {/* Season Header */}
      <div
        className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-800/50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex-1">
          <h3 className="text-white font-semibold text-base sm:text-lg">
            Season {season.number.toString().padStart(2, '0')}
          </h3>
          <p className="text-gray-400 text-sm">
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
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
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
  onEpisodePlay
}) => {
  const [expandedSeasons, setExpandedSeasons] = useState<Set<string>>(
    new Set([seasons[currentSeason - 1]?.id])
  );

  const toggleSeason = (seasonId: string) => {
    setExpandedSeasons(prev => {
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
        <p className="text-gray-400 text-sm">
          {seasons.length} Season{seasons.length !== 1 ? 's' : ''} • {' '}
          {seasons.reduce((total, season) => total + season.episodeCount, 0)} Episodes
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
  const sampleData: Season[] = [
    {
      id: 'season-1',
      number: 1,
      title: 'Season One',
      episodeCount: 8,
      description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange girl.',
      episodes: [
        {
          id: 'ep-1-1',
          number: 1,
          title: 'Chapter One: The Vanishing of Will Byers',
          description: 'After a young boy vanishes, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
          duration: '47 min',
          thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=120&fit=crop&crop=center',
          releaseDate: '2016-07-15'
        },
        {
          id: 'ep-1-2',
          number: 2,
          title: 'Chapter Two: The Weirdo on Maple Street',
          description: 'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.',
          duration: '55 min',
          thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=120&fit=crop&crop=center'
        },
        {
          id: 'ep-1-3',
          number: 3,
          title: 'Chapter Three: Holly, Jolly',
          description: 'An increasingly concerned Nancy looks for Barb and finds out what Jonathan has been up to. Joyce is convinced Will is trying to talk to her.',
          duration: '52 min',
          thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=120&fit=crop&crop=center'
        },
        {
          id: 'ep-1-4',
          number: 4,
          title: 'Chapter Four: The Body',
          description: 'Refusing to believe Will is dead, Joyce and Hopper team up to investigate what happened to him. Hopper breaks into the lab.',
          duration: '50 min',
          thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=120&fit=crop&crop=center'
        }
      ]
    },
    {
      id: 'season-2',
      number: 2,
      title: 'Season Two',
      episodeCount: 9,
      description: 'It\'s 1984 and the citizens of Hawkins, Indiana are still reeling from the horrors of the demogorgon and the secrets of Hawkins Lab.',
      episodes: [
        {
          id: 'ep-2-1',
          number: 1,
          title: 'Chapter One: MADMAX',
          description: 'As the town preps for Halloween, a high-scoring rival shakes things up in the arcade, and a skeptical Hopper inspects a field of rotting pumpkins.',
          duration: '48 min',
          thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=120&fit=crop&crop=center'
        },
        {
          id: 'ep-2-2',
          number: 2,
          title: 'Chapter Two: Trick or Treat, Freak',
          description: 'After Will sees something terrible on his trick-or-treat Halloween night, Mike wonders whether Eleven is still out there. Nancy wrestles with the truth about Barb.',
          duration: '53 min',
          thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=120&fit=crop&crop=center'
        }
      ]
    },
    {
      id: 'season-3',
      number: 3,
      title: 'Season Three',
      episodeCount: 8,
      description: 'It\'s 1985 in Hawkins, Indiana, and summer\'s heating up. School\'s out, there\'s a brand new mall in town, and the Hawkins crew are on the cusp of adulthood.',
      episodes: [
        {
          id: 'ep-3-1',
          number: 1,
          title: 'Chapter One: Suzie, Do You Copy?',
          description: 'Summer brings new jobs and budding romance. But the mood shifts when Dustin\'s radio picks up a Russian broadcast, and Will senses something is wrong.',
          duration: '50 min',
          thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=120&fit=crop&crop=center'
        }
      ]
    }
  ];

  const handleEpisodePlay = (seasonId: string, episodeId: string) => {
    alert(`Playing Season ${seasonId}, Episode ${episodeId}`);
  };

  return (
    <SeasonsAndEpisodes
      seasons={sampleData}
      currentSeason={1}
      onEpisodePlay={handleEpisodePlay}
    />
  );
};

export default SeasonsEpisodesDemo;
