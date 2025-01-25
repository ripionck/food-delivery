import PropTypes from "prop-types";

function DeliveryDetails({ details }) {
  return (
    <div>
      <h2 className="font-semibold mb-3">Delivery Details</h2>
      <div className="space-y-1 text-gray-600">
        <p>{details.name}</p>
        <p>{details.phone}</p>
        <p>{details.address}</p>
        <p>{details.city}</p>
      </div>
    </div>
  );
}

DeliveryDetails.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeliveryDetails;
