import { useState } from "react";
import ProgressBar from "./ProgressBar"; // Adjust the import path as needed
import { Link } from "react-router-dom";

function DeliveryForm() {
  const [currentStep, setCurrentStep] = useState(2);
  const [deliveryTime, setDeliveryTime] = useState("now");

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <ProgressBar currentStep={currentStep} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="flex-1">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Delivery Address</h2>
              <form className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                {/* Street Address */}
                <div>
                  <label
                    htmlFor="street"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="street"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                {/* Phone and Instructions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="instructions"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Delivery Instructions
                    </label>
                    <input
                      type="text"
                      id="instructions"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
                {/* Delivery Time */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Delivery Time</h3>
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="deliveryTime"
                        value="now"
                        checked={deliveryTime === "now"}
                        onChange={(e) => setDeliveryTime(e.target.value)}
                        className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <div className="ml-3">
                        <span className="block font-medium">
                          Deliver Now (25-35 min)
                        </span>
                        <span className="text-sm text-gray-500">
                          Fastest delivery time
                        </span>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="deliveryTime"
                        value="later"
                        checked={deliveryTime === "later"}
                        onChange={(e) => setDeliveryTime(e.target.value)}
                        className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <div className="ml-3">
                        <span className="block font-medium">
                          Schedule for Later
                        </span>
                        <span className="text-sm text-gray-500">
                          Choose your preferred time
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Order Summary */}
          <div className="lg:w-96">
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
                <Link to="/payment">
                  <button className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                    Continue to Payment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryForm;
