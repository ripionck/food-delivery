import { MapPin } from "lucide-react";

function DeliveryLocation() {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-semibold mb-2">Delivery Location</h3>
      <div className="flex items-start gap-3">
        <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
        <p className="text-gray-600">
          123 Main Street, Apt 4B, New York, NY 10001
        </p>
      </div>
    </div>
  );
}

export default DeliveryLocation;
