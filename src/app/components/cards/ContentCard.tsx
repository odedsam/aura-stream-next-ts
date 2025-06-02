import Image from "next/image";
interface ContentCardProps {
  title: string;
  imageUrl: string;
  layoutStyle: 'genre' | 'standard';
  genreName?: string;
  isTop10?: boolean;
  duration?: string;
  seasons?: string;
  rating?: string;
}

function ContentCard({
  title,
  imageUrl,
  layoutStyle,
  genreName,
  isTop10,
  duration,
  seasons,
  rating,
}: ContentCardProps) {
  return (
    <div className={`content-card ${layoutStyle}-layout`}>
      <Image src={imageUrl} alt={title} />
      <div className="card-info">
        <h3>{title}</h3>
        {layoutStyle === 'genre' && genreName && <p className="genre">{genreName}</p>}
        {isTop10 && <div className="top-10-badge">Top 10</div>}
        {layoutStyle === 'standard' && (
          <div className="meta-info">
            {duration && <span className="duration">{duration}</span>}
            {seasons && <span className="seasons">{seasons}</span>}
            {rating && <span className="rating">{rating}</span>}
          </div>
        )}
      </div>
    </div>
  );
}

export default ContentCard;
