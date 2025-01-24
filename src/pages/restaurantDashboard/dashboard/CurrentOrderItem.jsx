import PropTypes from "prop-types";
import { MoreVertical } from "lucide-react";

function CurrentOrderItem({ orderId, details, status, statusColor }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center font-medium">
          #{orderId}
        </div>
        <div>
          <h3 className="font-medium">{details}</h3>
          <p className="text-sm text-gray-500">{status}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={`px-3 py-1 ${statusColor} text-sm rounded-full`}>
          {status}
        </span>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={20} />
        </button>
      </div>
    </div>
  );
}

CurrentOrderItem.propTypes = {
  orderId: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  statusColor: PropTypes.string.isRequired,
};

export default CurrentOrderItem;
