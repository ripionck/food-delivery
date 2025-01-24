import PropTypes from "prop-types";
import { Phone, MessageSquare } from "lucide-react";

function DeliveryPartner({ name, id, imageUrl }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Delivery Partner</h2>
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt="Delivery Partner"
          className="w-14 h-14 rounded-full"
        />
        <div className="flex-1">
          <h3 className="font-medium">{name}</h3>
          <p className="text-gray-500 text-sm">ID: {id}</p>
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
  );
}

DeliveryPartner.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default DeliveryPartner;
