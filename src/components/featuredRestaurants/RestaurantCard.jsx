import PropTypes from "prop-types";
import { Star, Clock, Truck } from "lucide-react";

function RestaurantCard({ restaurant }) {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-48">
        <img
          src={restaurant.image || "/placeholder.svg"}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {restaurant.tag && (
            <span className="px-2 py-1 bg-orange-500 text-white text-sm font-medium rounded">
              {restaurant.tag}
            </span>
          )}
          <span className="px-2 py-1 bg-white text-gray-900 text-sm font-medium rounded flex items-center">
            {restaurant.rating}
            <Star className="w-4 h-4 text-yellow-400 ml-1" />
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              {restaurant.name}
            </h3>
            <p className="text-gray-500 mt-1">{restaurant.address}</p>
          </div>
          <span className="text-green-600 text-sm font-medium">
            {restaurant.status}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {restaurant.deliveryTime}
          </div>
          <div className="flex items-center">
            <Truck className="w-4 h-4 mr-1" />
            {restaurant.deliveryFee}
          </div>
        </div>
      </div>
    </div>
  );
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    deliveryTime: PropTypes.string.isRequired,
    deliveryFee: PropTypes.string.isRequired,
    tag: PropTypes.string,
    status: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default RestaurantCard;
