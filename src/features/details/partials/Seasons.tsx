import { EpisodeCard } from '@/app/components/cards/EpisodeCard';
import { SeasonsHeader } from '@/types/components';
import { ChevronDown, ChevronUp } from 'lucide-react';
export const SeasonContainer = ({ season, isExpanded, onToggle, onEpisodePlay }: SeasonsHeader) => {
  return (
    <div className="space-y-4 font-manrope">
      <div
        className="flex items-center justify-between p-4 bg-sec rounded-lg border-2 border-quinary cursor-pointer hover:bg-gray-800/50 transition-colors"
        onClick={onToggle}>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-base sm:text-lg">
            Season {season.number.toString().padStart(2, '0')}
          </h3>
          <p className="text-gray-def font-bold text-sm">{season.episodeCount} Episodes</p>
          {season.description && (
            <p className="text-gray-def text-xs mt-1 line-clamp-1 sm:line-clamp-none">
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
