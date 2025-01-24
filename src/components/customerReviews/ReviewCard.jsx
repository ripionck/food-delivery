import { Clock, Star, StarHalf } from "lucide-react";
import PropTypes from "prop-types";

function ReviewCard({ review }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
        />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="w-5 h-5 fill-yellow-400 text-yellow-400"
        />,
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-200" />);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={review.avatar || "/placeholder.svg"}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{review.name}</h3>
          <div className="flex items-center gap-1">
            {renderStars(review.rating)}
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{review.comment}</p>
      <div className="flex items-center text-gray-500 text-sm">
        <Clock className="w-4 h-4 mr-1" />
        {review.timeAgo}
      </div>
    </div>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    timeAgo: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewCard;
