'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PosterImageProps {
  src?: string | null;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const PosterImage = ({ src, alt, width = 300, height = 450, className }: PosterImageProps) => {
  const imageUrl = src ? `https://image.tmdb.org/t/p/w500${src}` : '/fallback-poster.jpg'; // Add a fallback image in your /public folder

  return (
    <div
      className={cn(
        'relative w-full max-w-xs rounded-xl overflow-hidden shadow-lg aspect-[2/3]',
        className,
      )}
      style={{ width, height }}>
      <Image
        src={imageUrl}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 300px"
        className="object-cover"
        placeholder="blur"
        blurDataURL="/blur-placeholder.jpg"
        priority={false}
      />
    </div>
  );
};

export default PosterImage;
