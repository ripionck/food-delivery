import PropTypes from "prop-types";
import { Clock, Truck, Star } from "lucide-react";

function RestaurantCard({ restaurant }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
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
        <p className="text-gray-600 text-sm mb-3">
          {restaurant.cuisines.join(" • ")}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1.5 text-orange-600" />
            {restaurant.distance}
          </span>
          <span className="flex items-center">
            <Truck className="w-4 h-4 mr-1.5 text-orange-600" />
            {restaurant.deliveryFee}
          </span>
        </div>
      </div>
    </div>
  );
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    status: PropTypes.string.isRequired,
    deliveryTime: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
    distance: PropTypes.string.isRequired,
    deliveryFee: PropTypes.string.isRequired,
  }).isRequired,
};

export default RestaurantCard;
