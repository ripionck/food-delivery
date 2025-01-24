import PropTypes from "prop-types";

function TimelineItem({ icon, title, description, time, bgColor, textColor }) {
  return (
    <div className="flex gap-4">
      <div
        className={`w-14 h-14 rounded-full ${bgColor} flex items-center justify-center flex-shrink-0`}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-500 text-sm mb-1">{description}</p>
        <span className={`text-sm ${textColor}`}>{time}</span>
      </div>
    </div>
  );
}

TimelineItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default TimelineItem;
