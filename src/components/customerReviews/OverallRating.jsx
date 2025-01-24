import { Star, StarHalf } from "lucide-react";

function OverallRating() {
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
    <div className="bg-[#FFF8F3] rounded-2xl p-8">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Rating Score */}
        <div className="text-center md:text-left">
          <div className="text-5xl font-bold text-gray-900 mb-2">4.8</div>
          <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
            {renderStars(4.8)}
          </div>
          <div className="text-gray-600">Overall Rating</div>
        </div>

        {/* Rating Bars */}
        <div className="space-y-3">
          {[
            { stars: 5, percentage: 75 },
            { stars: 4, percentage: 20 },
            { stars: 3, percentage: 5 },
          ].map((rating) => (
            <div key={rating.stars} className="flex items-center gap-2">
              <div className="w-16 text-sm text-gray-600">
                {rating.stars} stars
              </div>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400 rounded-full"
                  style={{ width: `${rating.percentage}%` }}
                  role="progressbar"
                  aria-valuenow={rating.percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <div className="w-12 text-sm text-gray-600">
                {rating.percentage}%
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center md:text-right">
          <div className="text-gray-600 mb-3">Share your experience</div>
          <button className="inline-flex items-center px-6 py-3 bg-[#FF642F] text-white font-medium rounded-full hover:bg-[#ff5216] transition-colors">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default OverallRating;
