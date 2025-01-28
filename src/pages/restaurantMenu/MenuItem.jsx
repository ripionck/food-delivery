import PropTypes from "prop-types";
import { Plus } from "lucide-react";

function MenuItem({ item, addToCart }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex gap-4">
        <img
          src={item.cover}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{item.name}</h3>
            {item.popular && (
              <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                Popular
              </span>
            )}
          </div>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-sm text-gray-500">{item.category}</span>
            {item.isVegetarian && (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Vegetarian
              </span>
            )}
            {item.isSpicy && (
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                Spicy
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
          <div className="flex items-center justify-between mt-2">
            <p className="text-lg font-medium">${item.price}</p>
            <div className="relative group">
              <button
                onClick={() => addToCart(item)}
                className="px-2 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-700 transition-colors relative"
              >
                <Plus className="w-5 h-5" />
              </button>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-orange-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-gray-800">
                Add to Cart
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    popular: PropTypes.bool,
    description: PropTypes.string.isRequired,
    cover: PropTypes.string,
    category: PropTypes.string.isRequired,
    isVegetarian: PropTypes.bool,
    isSpicy: PropTypes.bool,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default MenuItem;
