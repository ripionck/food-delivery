import PropTypes from "prop-types";

function DeliveryAddressForm({ deliveryTime, setDeliveryTime }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Delivery Address</h2>
      <form className="space-y-6">
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
                <span className="block font-medium">Schedule for Later</span>
                <span className="text-sm text-gray-500">
                  Choose your preferred time
                </span>
              </div>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

DeliveryAddressForm.propTypes = {
  deliveryTime: PropTypes.string.isRequired,
  setDeliveryTime: PropTypes.func.isRequired,
};

export default DeliveryAddressForm;
