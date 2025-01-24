import PropTypes from "prop-types";

function StepCard({ step }) {
  return (
    <div
      key={step.title}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-[#FFF0E6] flex items-center justify-center mb-6">
          <step.icon className="w-8 h-8 text-[#FF642F]" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {step.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}

StepCard.propTypes = {
  step: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default StepCard;
