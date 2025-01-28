import PropTypes from "prop-types";
import { LayoutGrid, List, Search } from "lucide-react";
import RestaurantCard from "../Shared/RestaurantCard";

function RestaurantList({
  viewMode,
  setViewMode,
  restaurants,
  searchQuery,
  setSearchQuery,
}) {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Popular Near You</h1>
        <div className="flex gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${
                viewMode === "grid"
                  ? "bg-orange-50 text-orange-500"
                  : "text-gray-500"
              }`}
            >
              <LayoutGrid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${
                viewMode === "list"
                  ? "bg-orange-50 text-orange-500"
                  : "text-gray-500"
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {restaurants.slice(0, 6).map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-2xl"
          >
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
          </div>
        ))}
      </div>
    </div>
  );
}

RestaurantList.propTypes = {
  viewMode: PropTypes.oneOf(["grid", "list"]).isRequired,
  setViewMode: PropTypes.func.isRequired,
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
      deliveryTime: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
      distance: PropTypes.string.isRequired,
      deliveryFee: PropTypes.string,
    }),
  ).isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default RestaurantList;
