import { useState } from "react";
import ProgressBar from "../../components/progressBar/ProgressBar";
import PaymentMethods from "./PaymentMethods";
import CardDetails from "./CardDetails";
import TwoFactorAuthentication from "./TwoFactorAuthentication";
import PaymentSummary from "./PaymentSummary";

function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [code, setCode] = useState([""]);

  const handleCodeChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto">
        <ProgressBar currentStep={3} />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <PaymentMethods
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
              {paymentMethod === "card" && <CardDetails />}
              <TwoFactorAuthentication
                code={code}
                handleCodeChange={handleCodeChange}
              />
            </div>
          </div>

          <div className="lg:w-96">
            <PaymentSummary
              orderTotal={37.5}
              processingFee={1.0}
              totalToPay={38.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
