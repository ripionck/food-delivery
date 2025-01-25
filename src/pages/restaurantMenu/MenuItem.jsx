import PropTypes from "prop-types";
import { Plus } from "lucide-react";

export default function MenuItem({ item }) {
  return (
    <div className="flex justify-between items-start p-4 border rounded-lg hover:shadow-sm transition-shadow">
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{item.name}</h3>
        <div className="mt-1 flex items-center">
          {item.fromPrice ? (
            <span className="text-gray-900">from Tk {item.fromPrice}</span>
          ) : (
            <span className="text-gray-900">Tk {item.price}</span>
          )}
          {item.popular && (
            <span className="ml-2 inline-flex items-center text-orange-500 text-sm">
              🔥 Popular
            </span>
          )}
        </div>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">
          {item.description}
        </p>
      </div>
      <div className="relative ml-4 flex flex-col items-end">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg mb-2"
        />
        <button className="absolute right-8 bottom-8 p-2 rounded-full border hover:bg-gray-50 transition-colors">
          <Plus className="w-4 h-4 hover:bg-white" />
        </button>
      </div>
    </div>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    fromPrice: PropTypes.number,
    price: PropTypes.number,
    popular: PropTypes.bool,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};
