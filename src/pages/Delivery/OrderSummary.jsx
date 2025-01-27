import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function OrderSummary({ items, subtotal, deliveryFee, tax, total }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-600">
              {item.name} x{item.quantity}
            </span>
            <span className="font-medium">${item.price}</span>
          </div>
        ))}
        <div className="h-px bg-gray-200 my-4"></div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${subtotal}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">${deliveryFee}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${tax}</span>
        </div>
        <div className="h-px bg-gray-200 my-4"></div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">${total}</span>
        </div>
        <Link to="/payment">
          <button className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            Continue to Payment
          </button>
        </Link>
      </div>
    </div>
  );
}

OrderSummary.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  subtotal: PropTypes.number.isRequired,
  deliveryFee: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default OrderSummary;
