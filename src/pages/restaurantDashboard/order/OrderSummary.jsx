function OrderSummary() {
  return (
    <div className="border-t pt-4 space-y-2">
      <div className="flex justify-between text-gray-600">
        <span>Subtotal</span>
        <span>$30.00</span>
      </div>
      <div className="flex justify-between text-gray-600">
        <span>Delivery Fee</span>
        <span>$5.00</span>
      </div>
      <div className="flex justify-between text-gray-600">
        <span>Tax</span>
        <span>$2.50</span>
      </div>
      <div className="flex justify-between font-semibold text-lg pt-2 border-t">
        <span>Total</span>
        <span>$37.50</span>
      </div>
    </div>
  );
}

export default OrderSummary;
