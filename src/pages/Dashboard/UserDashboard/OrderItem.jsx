import PropTypes from "prop-types";

function OrderItem({ orderId, status, date, total, deliveryTime, address }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="flex items-center gap-4 p-4">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-semibold">Order #{orderId}</h3>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 ${status.bgColor} ${status.textColor} text-sm rounded-full`}
              >
                {status.label}
              </span>
              <span className="font-semibold">${total}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{deliveryTime}</span>
              <span>{address}</span>
            </div>
            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              <button className="text-orange-500 hover:text-orange-600 font-medium">
                View Details
              </button>
              <button className="text-orange-500 hover:text-orange-600 font-medium">
                Reorder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

OrderItem.propTypes = {
  orderId: PropTypes.string.isRequired,
  status: PropTypes.shape({
    label: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  deliveryTime: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default OrderItem;
