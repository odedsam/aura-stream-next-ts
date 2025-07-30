'use client';
import type { EpisodeCardProps } from '@/types/components';
import { Play, Clock } from 'lucide-react';
import { Tag } from '@/components/ui/Tags';
import Image from 'next/image';

export const EpisodeCard = ({ episode, seasonId, onPlay }: EpisodeCardProps) => {
  const title = episode.name || 'Untitled Episode';
  const overview = episode.overview || 'No overview available for this episode.';
  const runtime =
    typeof episode.runtime === 'number' ? `${episode.runtime} min` : 'Duration unknown';
  return (
    <div className="bg-sec rounded-lg border-2 border-quinary overflow-hidden hover:bg-gray-800/70 transition-colors group">
      <div className="flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-32 h-20 sm:h-24 flex-shrink-0">
          {episode.trailerKey ? (
            <div className="aspect-video w-full rounded overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${episode.trailerKey}`}
                title={`Trailer for ${episode.name || 'Episode'}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"></iframe>
            </div>
          ) : (
            <img
              src={
                episode.still_path
                  ? `https://image.tmdb.org/t/p/w300${episode.poster_path}`
                  : '/android-chrome-192x192.png'
              }
              alt={episode.name}
              className="rounded-md w-full h-auto object-cover max-h-[92px] max-sm:min-w-full max-sm:object-fill sm:max-w-[92px]"
            />
          )}

          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onPlay?.(seasonId, episode.id.toString())}
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors">
              <Play className="w-4 h-4 fill-current" />
            </button>
          </div>
          <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {episode && episode.episode_number.toString().padStart(2, '0')}
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div className="flex-1">
              <h4 className="text-white font-semibold text-sm sm:text-base line-clamp-1">
                {title}
              </h4>
              <p className="text-gray-def text-xs sm:text-sm mt-1 line-clamp-2">{overview}</p>
            </div>

            <Tag className="max-sm:w-[6rem] font-manrope inline-flex items-center gap-2 text-gray-def text-xs">
              <Clock className="w-3 h-3" />
              <span>{runtime}</span>
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
};
