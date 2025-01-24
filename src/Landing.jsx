import { MapPin, Search, Clock, Heart, ChevronRight, Star } from "lucide-react";

function Landing() {
  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Delicious Food
                <br />
                <span className="text-[#FF642F]">Delivered to Your Door</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Order from your favorite restaurants and track your delivery in
                real-time. Get fresh food delivered within minutes.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <button className="px-6 py-3 bg-[#FF642F] text-white rounded-lg font-medium flex items-center gap-2 hover:bg-[#ff5216] transition-colors">
                <Search className="w-5 h-5" />
                Find Food
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-8">
              {[
                { icon: "🚀", text: "Fast Delivery" },
                { icon: "🔒", text: "Secure Payment" },
                { icon: "⭐", text: "Best Quality" },
              ].map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="text-xl">{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Order Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto lg:ml-auto">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-orange-100 rounded-lg">🍽️</span>
                  <div>
                    <h3 className="font-semibold">Order Now</h3>
                    <p className="text-sm text-gray-500">Fast & Easy</p>
                  </div>
                </div>
                <Heart className="text-[#FF642F] w-6 h-6" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-orange-100 rounded-lg">
                    <Clock className="w-5 h-5 text-[#FF642F]" />
                  </span>
                  <div>
                    <h3 className="font-semibold">Delivery Time</h3>
                    <p className="text-sm text-gray-500">25-30 min</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-[#FF642F]">
                  1
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-orange-100 rounded-lg">🏷️</span>
                  <div>
                    <h3 className="font-semibold">Special Offer</h3>
                    <p className="text-sm text-gray-500">20% off today</p>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Restaurants Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Restaurants
            </h2>
            <p className="text-gray-600 mt-1">
              Explore our handpicked selection of top-rated restaurants
            </p>
          </div>
          <button className="text-[#FF642F] font-medium flex items-center gap-1 hover:underline">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "The Italian Kitchen",
              address: "123 Main Street, City",
              rating: 4.8,
              status: "Open Now",
              badge: "Popular",
              icon: "🍝",
            },
            {
              name: "Burger House",
              address: "456 Food Street, City",
              rating: 4.6,
              status: "Open Now",
              icon: "🍔",
            },
            {
              name: "Sushi Master",
              address: "789 Sushi Lane, City",
              rating: 4.7,
              status: "Open Now",
              badge: "Trending",
              icon: "🍱",
            },
          ].map((restaurant) => (
            <div
              key={restaurant.name}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center text-4xl">
                {restaurant.icon}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  {restaurant.badge && (
                    <span className="px-3 py-1 bg-orange-100 text-[#FF642F] rounded-full text-sm">
                      {restaurant.badge}
                    </span>
                  )}
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{restaurant.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {restaurant.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{restaurant.address}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#22C55E]">{restaurant.status}</span>
                  <button className="text-[#FF642F] font-medium hover:underline">
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
