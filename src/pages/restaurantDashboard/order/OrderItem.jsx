import PropTypes from "prop-types";

function OrderItem({ name, quantity, description, price }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-500">
          {quantity}x • {description}
        </p>
      </div>
      <span className="font-medium">${price}</span>
    </div>
  );
}

OrderItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default OrderItem;
