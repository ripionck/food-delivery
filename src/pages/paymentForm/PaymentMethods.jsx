import PropTypes from "prop-types";

function PaymentMethods({ paymentMethod, setPaymentMethod }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Select Payment Method</h2>
      <div className="space-y-3">
        <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
          />
          <span className="ml-3 font-medium">Credit/Debit Card</span>
        </label>
        <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            name="paymentMethod"
            value="wallet"
            checked={paymentMethod === "wallet"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
          />
          <span className="ml-3 font-medium">Digital Wallet</span>
        </label>
        <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            name="paymentMethod"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
          />
          <span className="ml-3 font-medium">Cash on Delivery</span>
        </label>
      </div>
    </div>
  );
}

PaymentMethods.propTypes = {
  paymentMethod: PropTypes.string.isRequired,
  setPaymentMethod: PropTypes.func.isRequired,
};

export default PaymentMethods;
