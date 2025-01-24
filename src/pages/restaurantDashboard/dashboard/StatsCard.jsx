import PropTypes from "prop-types";

function StatsCard({ title, value, percentage, icon, bgColor, textColor }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold mb-1">{value}</h3>
          <span className={`text-sm ${textColor}`}>{percentage}</span>
        </div>
        <div
          className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default StatsCard;
