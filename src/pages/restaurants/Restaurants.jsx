import { useState } from "react";
import CuisineFilter from "./CuisineFilter";
import RestaurantCard from "./RestaurantCard";

function Restaurants() {
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
      image: "https://shorturl.at/W3ceI",
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
      image: "https://shorturl.at/lvQMo",
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
      image: "https://shorturl.at/uNCBO",
      status: "Closed",
      deliveryTime: "30-45 min",
      rating: 4.2,
      cuisines: ["Indian", "Curry", "Vegetarian"],
      distance: "2.0 km away",
      deliveryFee: "$4 delivery",
    },
  ];

  const filteredRestaurants =
    selectedCuisine === "All Cuisines"
      ? restaurants
      : restaurants.filter((restaurant) =>
          restaurant.cuisines.includes(selectedCuisine),
        );

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Popular Restaurants
      </h2>

      <CuisineFilter
        cuisines={cuisines}
        selectedCuisine={selectedCuisine}
        setSelectedCuisine={setSelectedCuisine}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition">
          Load More Restaurants
        </button>
      </div>
    </section>
  );
}

export default Restaurants;
