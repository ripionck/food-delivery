import { Star, StarHalf, Clock } from "lucide-react";

function CustomerReviews() {
  const reviews = [
    {
      name: "Sarah Mitchell",
      avatar: "https://avatar.iran.liara.run/public",
      rating: 5,
      comment:
        "Amazing service! The food arrived hot and fresh. The real-time tracking feature helped me plan my time better. Definitely my go-to food delivery app now!",
      timeAgo: "2 days ago",
    },
    {
      name: "James Wilson",
      avatar: "https://avatar.iran.liara.run/public",
      rating: 4.5,
      comment:
        "The variety of restaurants is impressive. I love how easy it is to customize orders and the loyalty points system is a great bonus. Customer service is top-notch!",
      timeAgo: "1 week ago",
    },
    {
      name: "Emily Chen",
      avatar: "https://avatar.iran.liara.run/public",
      rating: 5,
      comment:
        "Secure payments and prompt delivery make this app stand out. The notifications keep me updated about my order status. Great experience every time!",
      timeAgo: "3 days ago",
    },
  ];

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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          What Our Customers Say
        </h2>
        <p className="text-gray-600">
          Read genuine reviews from our satisfied customers who love ordering
          from our platform
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
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
        ))}
      </div>

      {/* Overall Rating */}
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
    </section>
  );
}

export default CustomerReviews;
