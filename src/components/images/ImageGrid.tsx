import Image from 'next/image';
type ImageGridProps = {
  images?: string[];
};

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="inline-grid grid-cols-2 gap-2">
      {images?.slice(0, 4).map((image, index) => (
        <div
          key={index}
          className="w-full aspect-[4/5] overflow-hidden rounded-lg bg-quaternary">
          <Image
            src={image}
            alt="genre-image"
            width={240}
            height={240}
            className="w-auto h-auto rounded-lg"
            style={{ width: '100%', height: 'auto' }}
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
