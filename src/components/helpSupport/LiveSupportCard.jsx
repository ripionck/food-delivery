import PropTypes from "prop-types";
import { MessageCircle, MessageSquare } from "lucide-react";

function LiveSupportCard({ onClick }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-green-500" />
        </div>
        <div>
          <h2 className="font-semibold text-gray-900">Live Support</h2>
          <p className="text-sm text-gray-500">Available 24/7</p>
        </div>
      </div>
      <button
        onClick={onClick}
        className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 flex items-center justify-center gap-2 transition-colors"
      >
        <MessageSquare className="w-5 h-5" />
        Start Chat
      </button>
    </div>
  );
}

LiveSupportCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LiveSupportCard;
