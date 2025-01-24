import { Minus, Plus } from "lucide-react";

function ShoppingCart() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

            {/* Active Cart Items */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Margherita Pizza"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">Margherita Pizza</h3>
                        <p className="text-sm text-gray-600">Italian Delight</p>
                        <p className="text-sm text-gray-500">
                          Extra cheese, oregano
                        </p>
                      </div>
                      <p className="font-semibold">$18.00</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-3">
                        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 text-center">2</span>
                        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="California Roll"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">California Roll</h3>
                        <p className="text-sm text-gray-600">Sushi Master</p>
                        <p className="text-sm text-gray-500">8 pieces</p>
                      </div>
                      <p className="font-semibold">$12.00</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-3">
                        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 text-center">1</span>
                        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Saved for Later */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Saved for Later</h2>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Chicken Tikka"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold">Chicken Tikka</h3>
                        <p className="text-sm text-gray-600">Spice Garden</p>
                        <p className="font-medium text-gray-900 mt-1">$15.00</p>
                      </div>
                      <button className="text-orange-500 hover:text-orange-600 font-medium">
                        Move to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
