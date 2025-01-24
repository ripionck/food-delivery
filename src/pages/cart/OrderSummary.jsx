import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function OrderSummary() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Margherita Pizza x2</span>
          <span className="font-medium">$18.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">California Roll x1</span>
          <span className="font-medium">$12.00</span>
        </div>
        <div className="h-px bg-gray-200 my-4"></div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">$30.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">$5.00</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">$2.50</span>
        </div>
        <div className="h-px bg-gray-200 my-4"></div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">$37.50</span>
        </div>
        <Link to="/delivery">
          <button className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}

OrderSummary.propTypes = {
  onContinueToPayment: PropTypes.func.isRequired,
};

export default OrderSummary;
