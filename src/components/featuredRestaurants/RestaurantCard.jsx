import { MapPin, Star } from "lucide-react";

function RestaurantCard({ restaurant }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
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
        <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
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
  );
}

export default RestaurantCard;
