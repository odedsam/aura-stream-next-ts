'use client';
import type { SeasonsEpisodesProps } from '@/types/components';
import { useState } from 'react';
import { SeasonContainer } from './partials/Seasons';
import { toast } from '@/lib/toast';

const SeasonsAndEpisodes = ({
  seasons,
  currentSeason = 1,
  onEpisodePlay,
}: SeasonsEpisodesProps) => {
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
    toast.error('Episode trailers are currently unavailable. Please try again later.');
  };

  return (
    <div className="bg-sec border-2 border-quinary p-4 sm:p-6 rounded-lg  max-w-4xl">
      <div className="mb-6">
        <h2 className="text-white text-xl sm:text-2xl font-bold mb-2">Seasons and Episodes</h2>
        <p className="text-gray-def text-sm">
          {seasons.length} Season{seasons.length !== 1 ? 's' : ''} •{' '}
          {seasons.reduce((total, season) => total + season.episodeCount, 0)} Episodes
        </p>
      </div>

      <div className="space-y-4">
        {seasons.map((season) => (
          <SeasonContainer
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

export default SeasonsAndEpisodes;
