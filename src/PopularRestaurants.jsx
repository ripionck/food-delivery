import { useState } from "react";

function PopularRestaurants() {
  const [selectedCuisine, setSelectedCuisine] = useState("All Cuisines");

  const cuisines = [
    "All Cuisines",
    "Italian",
    "Chinese",
    "Indian",
    "Mexican",
    "Japanese",
  ];

  const restaurants = [
    {
      id: 1,
      name: "Italian Delight",
      image: "",
      status: "Open",
      deliveryTime: "25-35 min",
      rating: 4.5,
      cuisines: ["Italian", "Pizza", "Pasta"],
      distance: "1.2 km away",
      deliveryFee: "$5 delivery",
    },
    {
      id: 2,
      name: "Sushi Master",
      image: "",
      status: "Open",
      deliveryTime: "15-25 min",
      rating: 4.8,
      cuisines: ["Japanese", "Sushi", "Asian"],
      distance: "0.8 km away",
      deliveryFee: "$3 delivery",
    },
    {
      id: 3,
      name: "Spice Garden",
      image: "",
      status: "Closed",
      deliveryTime: "30-45 min",
      rating: 4.2,
      cuisines: ["Indian", "Curry", "Vegetarian"],
      distance: "2.0 km away",
      deliveryFee: "$4 delivery",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Popular Restaurants
      </h2>

      {/* Cuisine Filters */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-8">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            onClick={() => setSelectedCuisine(cuisine)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCuisine === cuisine
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cuisine}
          </button>
        ))}
      </div>

      {/* Restaurant Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            {/* Restaurant Image */}
            <div className="bg-gray-200 h-48 flex justify-center items-center relative">
              <span className="text-gray-400">Image Placeholder</span>
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    restaurant.status === "Open"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {restaurant.status}
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="px-3 py-1 rounded-full bg-white text-sm text-gray-700">
                  {restaurant.deliveryTime}
                </span>
              </div>
            </div>

            {/* Restaurant Info */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {restaurant.name}
                </h3>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm font-medium">
                  {restaurant.rating}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                {restaurant.cuisines.join(" • ")}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{restaurant.distance}</span>
                <span className="mx-2">•</span>
                <span>{restaurant.deliveryFee}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition">
          Load More Restaurants
        </button>
      </div>
    </section>
  );
}

export default PopularRestaurants;
