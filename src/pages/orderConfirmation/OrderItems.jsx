import PropTypes from "prop-types";

function OrderItems({ items }) {
  return (
    <div>
      <h2 className="font-semibold mb-3">Order Items</h2>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <div>
              {item.quantity}x {item.name}
            </div>
            <div>${item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

OrderItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default OrderItems;
