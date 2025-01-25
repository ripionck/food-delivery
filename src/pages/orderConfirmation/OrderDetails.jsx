import PropTypes from "prop-types";
import OrderItems from "./OrderItems";
import DeliveryDetails from "./DeliveryDetails";
import PaymentSummary from "./PaymentSummary";
import SpecialOffer from "./SpecialOffer";

function OrderDetails({ order }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-gray-600">Order #{order.id}</div>
        <div className="text-green-500">
          Estimated Delivery: {order.estimatedDelivery}
        </div>
      </div>
      <OrderItems items={order.items} />
      <DeliveryDetails details={order.deliveryDetails} />
      <PaymentSummary summary={order.paymentSummary} />
      <div className="space-y-3">
        <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          Track Your Order
        </button>
        <button className="w-full px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
          Download Receipt
        </button>
      </div>
      <SpecialOffer />
    </div>
  );
}

OrderDetails.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    estimatedDelivery: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
      }),
    ).isRequired,
    deliveryDetails: PropTypes.shape({
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
    paymentSummary: PropTypes.shape({
      subtotal: PropTypes.number.isRequired,
      deliveryFee: PropTypes.number.isRequired,
      tax: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default OrderDetails;
