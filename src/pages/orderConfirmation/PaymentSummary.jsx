import PropTypes from "prop-types";

function PaymentSummary({ summary }) {
  return (
    <div>
      <h2 className="font-semibold mb-3">Payment Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${summary.subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>${summary.deliveryFee}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${summary.tax}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total Paid</span>
          <span>${summary.total}</span>
        </div>
      </div>
    </div>
  );
}

PaymentSummary.propTypes = {
  summary: PropTypes.shape({
    subtotal: PropTypes.number.isRequired,
    deliveryFee: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default PaymentSummary;
