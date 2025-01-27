import Rewards from "./Rewards";
import ProgressBar from "../../components/Shared/ProgressBar";
import OrderDetails from "./OrderDetails";

export default function OrderConfirmation() {
  const order = {
    id: "123456",
    estimatedDelivery: "30-45 mins",
    items: [
      { name: "Margherita Pizza (Large)", quantity: 1, price: 12.99 },
      { name: "Chicken Wings (8pc)", quantity: 1, price: 8.99 },
    ],
    deliveryDetails: {
      name: "John Doe",
      phone: "+1 234 567 8900",
      address: "123 Main St, Apt 4B",
      city: "New York, NY 10001",
    },
    paymentSummary: {
      subtotal: 21.98,
      deliveryFee: 2.99,
      tax: 1.8,
      total: 26.77,
    },
  };

  return (
    <>
      <div className="max-w-2xl mx-auto p-6">
        <ProgressBar currentStep={4} />

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-green-500 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600">
            Your order has been successfully placed and is being prepared.
          </p>
        </div>

        <OrderDetails order={order} />
      </div>
      <Rewards />
    </>
  );
}
