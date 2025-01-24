import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";

function HelpTopics({ topics }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="font-semibold text-gray-900 mb-4">Help Topics</h2>
      <div className="space-y-3">
        {topics.map((topic, index) => (
          <button
            key={index}
            className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg group transition-colors"
          >
            <span className="text-gray-600 group-hover:text-gray-900">
              {topic}
            </span>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
          </button>
        ))}
      </div>
    </div>
  );
}

HelpTopics.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HelpTopics;
