import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRestaurants() {
  const restaurants = [
    {
      id: 1,
      name: "The Italian Kitchen",
      address: "123 Main Street, City",
      rating: 4.8,
      deliveryTime: "25-30 min",
      deliveryFee: "Free Delivery",
      tag: "Popular",
      status: "Open Now",
      image: "https://shorturl.at/lvQMo",
    },
    {
      id: 2,
      name: "Burger House",
      address: "456 Food Street, City",
      rating: 4.6,
      deliveryTime: "15-20 min",
      deliveryFee: "$2 Delivery",
      status: "Open Now",
      image: "https://shorturl.at/W3ceI",
    },
    {
      id: 3,
      name: "Sushi Master",
      address: "789 Sushi Lane, City",
      rating: 4.7,
      deliveryTime: "30-35 min",
      deliveryFee: "Free Delivery",
      tag: "Trending",
      status: "Open Now",
      image: "https://shorturl.at/uNCBO",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Restaurants
            </h2>
            <p className="mt-2 text-gray-600">
              Explore our handpicked selection of top-rated restaurants
            </p>
          </div>
          <Link
            to="/restaurants"
            className="text-orange-500 hover:text-orange-600 flex items-center"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}
