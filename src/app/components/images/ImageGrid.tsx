import Image from 'next/image';
type ImageGridProps = {
  images?: string[];
};

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="inline-grid grid-cols-2 gap-2">
      {images?.slice(0, 4).map((image, index) => (
        <div key={index} className="rounded-lg bg-quaternary">
          <Image src={image} alt="genre-image" width={122} height={122} className="w-[122px] h-[122px] rounded-lg" priority={index === 0} />
        </div>
      ))}
    </div>
  );
}
