import { useState } from "react";
import PropTypes from "prop-types";
import {
  LayoutDashboard,
  History,
  Bookmark,
  Settings,
  HelpCircle,
} from "lucide-react";

function Navigation({ onSelect }) {
  const [activeButton, setActiveButton] = useState("dashboard");

  const handleButtonClick = (button) => {
    setActiveButton(button);
    onSelect(button);
  };

  return (
    <nav className="space-y-2">
      <button
        onClick={() => handleButtonClick("dashboard")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeButton === "dashboard"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </button>
      <button
        onClick={() => handleButtonClick("orderHistory")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeButton === "orderHistory"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <History size={20} />
        <span>Orders</span>
      </button>
      <button
        onClick={() => handleButtonClick("saved")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeButton === "saved"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <Bookmark size={20} />
        <span>Saved</span>
      </button>
      <button
        onClick={() => handleButtonClick("settings")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeButton === "settings"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <Settings size={20} />
        <span>Settings</span>
      </button>
      <button
        onClick={() => handleButtonClick("support")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeButton === "support"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
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
