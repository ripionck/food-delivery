import { Phone } from "lucide-react";

function DeliveryPartner() {
  return (
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
  );
}

export default DeliveryPartner;
