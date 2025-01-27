import { useState } from "react";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummary from "./OrderSummary";
import ProgressBar from "../../components/Shared/ProgressBar";

function DeliveryForm() {
  const [deliveryTime, setDeliveryTime] = useState("now");

  const orderItems = [
    { name: "Margherita Pizza", quantity: 2, price: 18.0 },
    { name: "California Roll", quantity: 1, price: 12.0 },
  ];

  const subtotal = 30.0;
  const deliveryFee = 5.0;
  const tax = 2.5;
  const total = 37.5;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <ProgressBar currentStep={2} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <DeliveryAddressForm
              deliveryTime={deliveryTime}
              setDeliveryTime={setDeliveryTime}
            />
          </div>
          <div className="lg:w-96">
            <OrderSummary
              items={orderItems}
              subtotal={subtotal}
              deliveryFee={deliveryFee}
              tax={tax}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryForm;
