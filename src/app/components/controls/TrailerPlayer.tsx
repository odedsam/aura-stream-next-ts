
'use client';

import { useState } from 'react';
import { Heart, Bookmark, PlayCircle } from 'lucide-react';
import { Button } from '../ui/Buttons';

interface TrailerPlayerProps {
  youtubeKey?: string;
  posterUrl?: string;
  title: string;
}

export const TrailerPlayer = ({ youtubeKey, posterUrl, title }: TrailerPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handlePlay = () => setIsPlaying(true);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg group">
      {!isPlaying ? (
        <>
          <img src={posterUrl} alt="Trailer poster" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
            <h1>{title}</h1>
            <div className="flex gap-2">
              <Button onClick={handlePlay} variant="red" icon={<PlayCircle className="w-5 h-5" />}>
                Play Trailer
              </Button>
              <Button
                variant={isSaved ? 'saved' : 'ghost'}
                size="icon"
                onClick={() => setIsSaved(!isSaved)}
                icon={<Bookmark className="w-5 h-5" />}
              />
              <Button
                variant={isFavorited ? 'favorite' : 'ghost'}
                size="icon"
                onClick={() => setIsFavorited(!isFavorited)}
                icon={<Heart className="w-5 h-5" />}
              />
            </div>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1&controls=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
        />
      )}
    </div>
  );
};
