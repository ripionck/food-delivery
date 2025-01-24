import {
  Check,
  ChefHat,
  Bike,
  Home,
  Phone,
  MessageSquare,
  MapPin,
} from "lucide-react";

function OrderTracking() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl space-y-6">
        {/* Order Header */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-semibold mb-1">Order #2391</h1>
              <p className="text-gray-500">Estimated Delivery: 25-30 mins</p>
            </div>
            <span className="px-3 py-1 bg-orange-50 text-orange-500 rounded-full text-sm">
              In Transit
            </span>
          </div>

          {/* Timeline */}
          <div className="space-y-6 relative before:absolute before:left-[27px] before:top-[28px] before:bottom-[28px] before:w-0.5 before:bg-gray-200">
            {/* Order Confirmed */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-medium">Order Confirmed</h3>
                <p className="text-gray-500 text-sm mb-1">
                  Your order has been received
                </p>
                <span className="text-gray-400 text-sm">2:30 PM</span>
              </div>
            </div>

            {/* Preparing */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <ChefHat className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-medium">Preparing</h3>
                <p className="text-gray-500 text-sm mb-1">
                  Restaurant is preparing your food
                </p>
                <span className="text-gray-400 text-sm">2:45 PM</span>
              </div>
            </div>

            {/* On the Way */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Bike className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="font-medium">On the Way</h3>
                <p className="text-gray-500 text-sm mb-1">
                  Your order is on the way
                </p>
                <span className="text-gray-400 text-sm">3:00 PM</span>
              </div>
            </div>

            {/* Delivered */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Home className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-400">Delivered</h3>
                <p className="text-gray-500 text-sm mb-1">
                  Estimated delivery time
                </p>
                <span className="text-gray-400 text-sm">3:15 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Partner */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Delivery Partner</h2>
          <div className="flex items-center gap-4">
            <img
              src="https://avatar.iran.liara.run/public"
              alt="Delivery Partner"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex-1">
              <h3 className="font-medium">Michael Johnson</h3>
              <p className="text-gray-500 text-sm">ID: DL45692</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50">
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                <MessageSquare className="w-4 h-4" />
                <span>Message</span>
              </button>
            </div>
          </div>
        </div>

        {/* Delivery Location */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Delivery Location</h2>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <h3 className="font-medium">Home</h3>
              <p className="text-gray-500">
                123 Main Street, Apt 4B
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            View Order Details
          </button>
          <button className="flex-1 px-6 py-3 text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
            Need Help?
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderTracking;
