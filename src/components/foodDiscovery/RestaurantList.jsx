import { LayoutGrid, List, Star, Clock, Bike } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RestaurantList({ viewMode, setViewMode, restaurants }) {
  return (
    <Link to="/menu" className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Popular Near You</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded ${
              viewMode === "grid"
                ? "bg-orange-50 text-orange-500"
                : "text-gray-500"
            }`}
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded ${
              viewMode === "list"
                ? "bg-orange-50 text-orange-500"
                : "text-gray-500"
            }`}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="bg-gray-200 h-48 flex justify-center items-center relative">
              <img
                src={restaurant.image || "/placeholder.svg"}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
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
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {restaurant.name}
                </h3>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm font-medium flex items-center">
                  {restaurant.rating}
                  <Star className="w-4 h-4 ml-1" />
                </span>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1.5 text-orange-600" />
                  {restaurant.distance}
                </span>
                <span className="flex items-center">
                  <Bike className="w-4 h-4 mr-1.5 text-orange-600" />
                  {restaurant.deliveryFee}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Link>
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
      deliveryFee: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RestaurantList;
