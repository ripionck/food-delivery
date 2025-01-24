function OrderSummary() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">$30.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-medium">$5.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">$2.50</span>
        </div>
        <div className="h-px bg-gray-200 my-4"></div>
        <div className="flex justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">$37.50</span>
        </div>

        <div className="flex gap-2 mt-6">
          <input
            type="text"
            placeholder="Enter promo code"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            Apply
          </button>
        </div>

        <button className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
