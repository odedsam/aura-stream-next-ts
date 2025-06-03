import type { ReviewCardProps } from '@/types/components';
import { formatRating } from '@/lib/utils';
import { StarRating } from '../common/StarRating';

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="content-block-black rounded-lg p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-white">{review.name}</h3>
          <p className="text-gray-def text-sm">{review.location}</p>
        </div>
        <div className="flex items-center gap-2">
          <StarRating rating={review.rating} />
          <span className="text-white font-medium">{formatRating(review.rating)}</span>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed">{review.content}</p>
    </div>
  );
};

export default ReviewCard;
