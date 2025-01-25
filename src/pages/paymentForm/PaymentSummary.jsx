import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";

function PaymentSummary({ orderTotal, processingFee, totalToPay }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Payment Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Order Total</span>
          <span className="font-medium">${orderTotal}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Processing Fee</span>
          <span className="font-medium">${processingFee}</span>
        </div>
        <div className="h-px bg-gray-200 my-4"></div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Total to Pay</span>
          <span className="font-semibold">${totalToPay}</span>
        </div>
        <Link to="/confirmation">
          <button className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Pay Securely
          </button>
        </Link>
        <p className="text-center text-sm text-gray-500">
          Your payment is secured with SSL encryption
        </p>
      </div>
    </div>
  );
}

PaymentSummary.propTypes = {
  orderTotal: PropTypes.number.isRequired,
  processingFee: PropTypes.number.isRequired,
  totalToPay: PropTypes.number.isRequired,
};

export default PaymentSummary;
