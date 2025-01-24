import PropTypes from "prop-types";

function FeatureCard({ feature }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-white/10 p-3 rounded-full">
        <feature.icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-semibold mb-1">{feature.title}</h4>
        <p className="text-white/75">{feature.description}</p>
      </div>
    </div>
  );
}

FeatureCard.propTypes = {
  feature: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeatureCard;
