import PropTypes from "prop-types";
import { Home, History, Heart, Settings, HelpCircle } from "lucide-react";

function Navigation({ onSelect }) {
  return (
    <nav className="space-y-2">
      <button
        onClick={() => onSelect("dashboard")}
        className="flex items-center gap-3 px-4 py-3 text-orange-500 bg-orange-50 rounded-lg"
      >
        <Home size={20} />
        <span>Dashboard</span>
      </button>
      <button
        onClick={() => onSelect("orderHistory")}
        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
      >
        <History size={20} />
        <span>Order History</span>
      </button>
      <button
        onClick={() => onSelect("favorites")}
        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
      >
        <Heart size={20} />
        <span>Favorites</span>
      </button>
      <button
        onClick={() => onSelect("settings")}
        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
      >
        <Settings size={20} />
        <span>Settings</span>
      </button>
      <button
        onClick={() => onSelect("support")}
        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
      >
        <HelpCircle size={20} />
        <span>Support</span>
      </button>
    </nav>
  );
}

Navigation.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Navigation;
