import { useState } from "react";
import Rewards from "./Rewards";
import ProgressBar from "./ProgressBar";

export default function OrderConfirmation() {
  const [currentStep, setCurrentStep] = useState(4);

  return (
    <>
      <div className="max-w-2xl mx-auto p-6">
        <ProgressBar currentStep={currentStep} />

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

        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="text-gray-600">Order #123456</div>
            <div className="text-green-500">Estimated Delivery: 30-45 mins</div>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Order Items</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>1x Margherita Pizza (Large)</div>
                <div>$12.99</div>
              </div>
              <div className="flex justify-between">
                <div>1x Chicken Wings (8pc)</div>
                <div>$8.99</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Delivery Details</h2>
            <div className="space-y-1 text-gray-600">
              <p>John Doe</p>
              <p>+1 234 567 8900</p>
              <p>123 Main St, Apt 4B</p>
              <p>New York, NY 10001</p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Payment Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$21.98</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>$2.99</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$1.80</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total Paid</span>
                <span>$26.77</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Track Your Order
            </button>
            <button className="w-full px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
              Download Receipt
            </button>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-center">
              Special Offer!
            </h3>
            <p className="text-gray-300 text-center mb-4">
              Here&apos;s a discount voucher for your next order
            </p>
            <div className="bg-gray-800 p-3 rounded flex justify-between items-center mb-2">
              <span className="font-mono">NEXT200FF</span>
              <button className="text-orange-500 hover:text-orange-400">
                Copy Code
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center">
              Valid for 7 days. Terms & conditions apply.
            </p>
          </div>
        </div>
      </div>
      <Rewards />
    </>
  );
}
