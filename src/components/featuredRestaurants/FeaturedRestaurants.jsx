import { ChevronRight } from "lucide-react";
import RestaurantCard from "./RestaurantCard";

function FeaturedRestaurants() {
  const restaurants = [
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
  ];

  return (
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
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.name} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedRestaurants;
