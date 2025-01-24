import PropTypes from "prop-types";

function OrderHeader({ orderId, estimatedDelivery, status }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Order #{orderId}</h1>
          <p className="text-gray-500">
            Estimated Delivery: {estimatedDelivery}
          </p>
        </div>
        <span className="px-3 py-1 bg-orange-50 text-orange-500 rounded-full text-sm">
          {status}
        </span>
      </div>
    </div>
  );
}

OrderHeader.propTypes = {
  orderId: PropTypes.string.isRequired,
  estimatedDelivery: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default OrderHeader;
