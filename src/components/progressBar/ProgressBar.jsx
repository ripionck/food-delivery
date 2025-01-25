import PropTypes from "prop-types";

export default function ProgressBar({ currentStep }) {
  const steps = [
    { id: 1, name: "Cart" },
    { id: 2, name: "Delivery" },
    { id: 3, name: "Payment" },
    { id: 4, name: "Confirmation" },
  ];

  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 
              ${
                currentStep >= step.id
                  ? "border-orange-500 bg-orange-500 text-white"
                  : "border-gray-300 bg-white text-gray-500"
              }`}
          >
            {step.id}
          </div>
          <div
            className={`ml-2 text-sm font-medium
              ${currentStep >= step.id ? "text-orange-500" : "text-gray-500"}`}
          >
            {step.name}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-24 h-0.5 mx-2
                ${currentStep > step.id ? "bg-orange-500" : "bg-gray-200"}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

ProgressBar.propTypes = {
  currentStep: PropTypes.number.isRequired,
};
