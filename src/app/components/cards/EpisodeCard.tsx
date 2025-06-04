'use client';
import type { EpisodeCardProps } from '@/types/components';
import { Play, Clock } from 'lucide-react';
import { Tag } from '@/app/components/ui/Tags';
import Image from 'next/image';

export const EpisodeCard = ({
  episode,
  seasonId,
  onPlay,
}: EpisodeCardProps) => {
  return (
    <div className="bg-sec rounded-lg border-2 border-quinary overflow-hidden hover:bg-gray-800/70 transition-colors group">
      <div className="flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-32 h-20 sm:h-24 flex-shrink-0">
          <Image
            src={episode.thumbnail}
            alt={episode.title}
            width={50}
            height={50}
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onPlay?.(seasonId, episode.id)}
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors">
              <Play className="w-4 h-4 fill-current" />
            </button>
          </div>
          <div className="absolute top-2 left-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
            {episode.number.toString().padStart(2, '0')}
          </div>
        </div>

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

            <Tag className="max-sm:w-[6rem]  inline-flex items-center gap-2 text-gray-def text-xs">
              <Clock className="w-3 h-3" />
              <span>{episode.duration}</span>
            </Tag>
          </div>
        </div>
      </div>
    </div>
  );
};
