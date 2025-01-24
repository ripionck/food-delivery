import PropTypes from "prop-types";
import { MapPin } from "lucide-react";

function DeliveryLocation({ locationName, address }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Delivery Location</h2>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
          <MapPin className="w-5 h-5 text-gray-500" />
        </div>
        <div>
          <h3 className="font-medium">{locationName}</h3>
          <p className="text-gray-500">{address}</p>
        </div>
      </div>
    </div>
  );
}

DeliveryLocation.propTypes = {
  locationName: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default DeliveryLocation;
