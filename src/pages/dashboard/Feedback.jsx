import { Star, MoreVertical, ThumbsUp, ThumbsDown, Reply } from "lucide-react";

export default function Feedback() {
  const stats = [
    {
      title: "Average Rating",
      value: "4.8",
      trend: "↑ 0.2 from last month",
      trendColor: "text-green-500",
    },
    {
      title: "Total Reviews",
      value: "1,284",
      trend: "↑ 124 new reviews",
      trendColor: "text-green-500",
    },
    {
      title: "Response Rate",
      value: "98%",
      trend: "↑ 3% from last month",
      trendColor: "text-green-500",
    },
    {
      title: "Pending Responses",
      value: "12",
      trend: "Requires attention",
      trendColor: "text-red-500",
    },
  ];

  const reviews = [
    {
      id: 1,
      author: "John Doe",
      avatar: "/placeholder.svg",
      rating: 5,
      time: "2 hours ago",
      content:
        "Excellent service and amazing food! The burger was perfectly cooked and the staff was very friendly. Will definitely come back!",
      helpful: 12,
      notHelpful: 2,
    },
    {
      id: 2,
      author: "Sarah Smith",
      avatar: "/placeholder.svg",
      rating: 4,
      time: "1 day ago",
      content:
        "Great atmosphere and delicious food. The pizza was amazing! Just wish the waiting time was a bit shorter.",
      helpful: 8,
      notHelpful: 1,
    },
  ];

  const ratingDistribution = [
    { stars: 5, percentage: 75, count: 960 },
    { stars: 4, percentage: 15, count: 192 },
    { stars: 3, percentage: 6, count: 77 },
    { stars: 2, percentage: 3, count: 38 },
    { stars: 1, percentage: 1, count: 17 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Customer Feedback</h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
              Download Report
            </button>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
              Export Feedback
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">
                {stat.title}
              </h3>
              <p className="text-2xl font-semibold mt-2">{stat.value}</p>
              <p className={`text-sm mt-2 ${stat.trendColor}`}>{stat.trend}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Reviews</h2>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6 last:border-0">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <img
                          src={review.avatar || "/placeholder.svg"}
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="ml-4">
                          <div className="flex items-center">
                            <h3 className="font-medium">{review.author}</h3>
                            <span className="text-gray-500 text-sm ml-2">
                              {review.time}
                            </span>
                          </div>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-gray-600 mt-3">{review.content}</p>
                    <div className="flex items-center mt-4 space-x-4">
                      <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Helpful ({review.helpful})
                      </button>
                      <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                        <ThumbsDown className="w-4 h-4 mr-1" />
                        Not Helpful ({review.notHelpful})
                      </button>
                      <button className="text-orange-600 text-sm hover:text-orange-700">
                        <Reply className="w-4 h-4 mr-1" />
                        Reply to review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">
                Rating Distribution
              </h2>
              <div className="space-y-3">
                {ratingDistribution.map((rating) => (
                  <div key={rating.stars} className="flex items-center">
                    <div className="w-12 text-sm text-gray-600">
                      {rating.stars} ★
                    </div>
                    <div className="flex-1 mx-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: `${rating.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-12 text-sm text-gray-500 text-right">
                      {rating.percentage}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
