import PropTypes from "prop-types";
import { Plus } from "lucide-react";

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <Plus
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? "transform rotate-45" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FAQItem;
