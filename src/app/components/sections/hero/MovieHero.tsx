'use client';

import { cn } from '@/utils';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface HeroMovieBannerProps {
  title: string;
  description: string;
  image?: string | null;
  trailerKey?: string | null;
  className?: string;
}

const HeroMovieBanner = ({
  title,
  description,
  image,
  trailerKey,
  className,
}: HeroMovieBannerProps) => {
  const hasImage = Boolean(image);

  return (
    <section
      className={cn(
        'relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-black text-white overflow-hidden rounded-xl',
        className,
      )}>
      {hasImage ? (
        <Image
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt={title}
          fill
          className="object-cover opacity-30"
          placeholder="blur"
          blurDataURL="/blur-placeholder.jpg"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-800 to-black opacity-60" />
      )}

      <div className="relative z-10 text-center max-w-2xl p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-md md:text-lg text-gray-200 mb-6 line-clamp-4">{description}</p>
        {trailerKey && (
          <a
            href={`https://www.youtube.com/watch?v=${trailerKey}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition">
            <Play size={20} />
            Watch Trailer
          </a>
        )}
      </div>
    </section>
  );
};

export default HeroMovieBanner;
