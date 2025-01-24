import PropTypes from "prop-types";
import { Utensils } from "lucide-react";

function RecentOrderItem({ restaurant, items, total, status }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
          <Utensils className="text-orange-500" size={20} />
        </div>
        <div>
          <h3 className="font-medium">{restaurant}</h3>
          <p className="text-sm text-gray-500">
            {items} items • ${total}
          </p>
        </div>
      </div>
      <span
        className={`px-3 py-1 ${status.bgColor} ${status.textColor} text-sm rounded-full`}
      >
        {status.label}
      </span>
    </div>
  );
}

RecentOrderItem.propTypes = {
  restaurant: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
  total: PropTypes.string.isRequired,
  status: PropTypes.shape({
    label: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecentOrderItem;
