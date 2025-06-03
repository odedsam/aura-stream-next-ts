import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  color = 'red-500',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const starSize = sizeClasses[size];

  const renderStars = (): React.ReactElement[] => {
    const stars: React.ReactElement[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const remainder = rating % 1;

    for (let i = 0; i < maxRating; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className={`${starSize} fill-${color} text-${color}`} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className={`${starSize} text-gray-400`} />
            <StarHalf className={`${starSize} fill-${color} text-${color} absolute top-0 left-0`} />
          </div>,
        );
      } else if (i === fullStars && remainder > 0 && remainder < 0.5) {
        stars.push(
          <div key={i} className="relative">
            <Star className={`${starSize} text-gray-400`} />
            <Star
              className={`${starSize} fill-${color} text-${color} absolute top-0 left-0`}
              style={{
                clipPath: `polygon(0 0, ${remainder * 200}% 0, ${remainder * 200}% 100%, 0% 100%)`,
              }}
            />
          </div>,
        );
      } else {
        stars.push(<Star key={i} className={`${starSize} text-gray-400`} />);
      }
    }
    return stars;
  };

  return <div className={`flex gap-1 ${className}`}>{renderStars()}</div>;
};
