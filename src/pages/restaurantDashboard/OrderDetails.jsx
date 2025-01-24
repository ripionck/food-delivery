import DeliveryLocation from "./order/DeliveryLocation";
import DeliveryPartner from "./order/DeliveryPartner";
import OrderHeader from "./order/OrderHeader";
import OrderItem from "./order/OrderItem";
import OrderSummary from "./order/OrderSummary";
import Timeline from "./order/Timeline";

function OrderDetails() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
        <OrderHeader />
        <Timeline />
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <DeliveryPartner />
          <DeliveryLocation />
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <div className="space-y-4 mb-6">
            <OrderItem
              name="Margherita Pizza"
              quantity={2}
              description="Extra cheese"
              price="18.00"
            />
            <OrderItem
              name="California Roll"
              quantity={1}
              description="8 pieces"
              price="12.00"
            />
          </div>
          <OrderSummary />
        </div>
        <button className="w-full text-center text-red-500 hover:text-red-600 font-medium">
          Cancel Order
        </button>
      </div>
    </div>
  );
}

export default OrderDetails;
