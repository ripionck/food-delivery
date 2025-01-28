import { useState, useEffect } from "react";
import CuisineFilter from "./CuisineFilter";
import RestaurantCard from "./RestaurantCard";

function Restaurants() {
  const [selectedCuisine, setSelectedCuisine] = useState("All Cuisines");
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [cuisineOptions, setCuisineOptions] = useState(["All Cuisines"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/restaurants.json");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();

        // Ensure data exists before setting state
        const restaurants = data?.restaurants || [];

        // Extract unique cuisines from all restaurants
        const uniqueCuisines = [
          ...new Set(
            restaurants.flatMap((restaurant) => restaurant.cuisines || []),
          ),
        ];

        setCuisineOptions(["All Cuisines", ...uniqueCuisines]);
        setRestaurantsData(restaurants);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredRestaurants =
    selectedCuisine === "All Cuisines"
      ? restaurantsData
      : restaurantsData.filter((restaurant) =>
          restaurant.cuisines.includes(selectedCuisine),
        );

  if (loading)
    return <div className="text-center py-8">Loading restaurants...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">
        Popular Restaurants
      </h2>

      <CuisineFilter
        cuisines={cuisineOptions}
        selectedCuisine={selectedCuisine}
        setSelectedCuisine={setSelectedCuisine}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={{
              ...restaurant,
              image: restaurant?.image || "/placeholder-food.jpg",
              status: restaurant?.status === "open" ? "Open" : "Closed",
              deliveryTime: restaurant?.deliveryTime || "30-45 min",
              rating: restaurant?.rating || 4.0,
              cuisines: restaurant.cuisines,
              distance: `${Math.floor(Math.random() * 5) + 1} km away`,
              deliveryFee: `$${Math.floor(Math.random() * 6) + 3} delivery`,
            }}
          />
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
