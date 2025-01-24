import { Phone, MapPin } from "lucide-react";

function OrderDetails() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
        {/* Order Header */}
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-2xl font-bold">Order #12345</h1>
          <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
            On the way
          </span>
        </div>

        {/* Timeline */}
        <div className="relative mb-12">
          <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200">
            <div className="absolute top-0 left-0 h-full bg-orange-500 w-3/4"></div>
          </div>
          <div className="relative flex justify-between">
            {/* Confirmed */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="font-medium text-sm">Confirmed</span>
              <span className="text-gray-500 text-xs">12:30 PM</span>
            </div>

            {/* Preparing */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="font-medium text-sm">Preparing</span>
              <span className="text-gray-500 text-xs">12:45 PM</span>
            </div>

            {/* On the way */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="font-medium text-sm">On the way</span>
              <span className="text-gray-500 text-xs">1:00 PM</span>
            </div>

            {/* Delivered */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
              <span className="font-medium text-sm text-gray-400">
                Delivered
              </span>
              <span className="text-gray-400 text-xs">Est. 1:15 PM</span>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Delivery Partner */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src="https://avatar.iran.liara.run/public"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">John Smith</h3>
                <p className="text-sm text-gray-500">Your Delivery Partner</p>
              </div>
            </div>
            <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call Driver
            </button>
          </div>

          {/* Delivery Location */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Delivery Location</h3>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-600">
                123 Main Street, Apt 4B, New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <div className="space-y-4 mb-6">
            {/* Margherita Pizza */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
              <div className="flex-1">
                <h3 className="font-medium">Margherita Pizza</h3>
                <p className="text-sm text-gray-500">2x • Extra cheese</p>
              </div>
              <span className="font-medium">$18.00</span>
            </div>

            {/* California Roll */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
              <div className="flex-1">
                <h3 className="font-medium">California Roll</h3>
                <p className="text-sm text-gray-500">1x • 8 pieces</p>
              </div>
              <span className="font-medium">$12.00</span>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>$30.00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>$2.50</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-2 border-t">
              <span>Total</span>
              <span>$37.50</span>
            </div>
          </div>
        </div>

        {/* Cancel Order */}
        <button className="w-full text-center text-red-500 hover:text-red-600 font-medium">
          Cancel Order
        </button>
      </div>
    </div>
  );
}

export default OrderDetails;
