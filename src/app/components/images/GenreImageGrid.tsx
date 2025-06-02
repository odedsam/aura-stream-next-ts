import Image from 'next/image';

type ImageGridProps = {
  images?: string[];
};

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2 mb-4">
      {images?.slice(0, 4).map((image, index) => (
        <div key={index} className="rounded-lg overflow-hidden bg-gray-700" style={{ width: '7.625rem', height: '7.625rem' }}>
          <Image src={image} alt="genre-image" width={122} height={122} style={{ objectFit: 'cover' }} priority={index === 0} />
        </div>
      ))}
    </div>
  );
}
