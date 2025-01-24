import OverallRating from "./OverallRating";
import ReviewCard from "./ReviewCard";

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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
      <OverallRating />
    </section>
  );
}

export default CustomerReviews;
