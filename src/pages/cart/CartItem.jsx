import PropTypes from "prop-types";
import { Minus, Plus } from "lucide-react";

function CartItem({ image, name, description, details, price, quantity }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex gap-4">
        <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-gray-600">{description}</p>
              <p className="text-sm text-gray-500">{details}</p>
            </div>
            <p className="font-semibold">${price}</p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                <Minus className="w-4 h-4 text-gray-600" />
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                <Plus className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default CartItem;
