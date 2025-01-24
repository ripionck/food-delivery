import { useState } from "react";
import PropTypes from "prop-types";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Bell,
  Tag,
  MessageSquare,
} from "lucide-react";

function Navigation({ onSelect }) {
  const [activeLink, setActiveLink] = useState("dashboard");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    onSelect(link);
  };

  return (
    <nav className="space-y-2">
      <button
        onClick={() => handleLinkClick("dashboard")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeLink === "dashboard"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <LayoutDashboard size={20} />
        <span>Dashboard</span>
      </button>
      <button
        onClick={() => handleLinkClick("menuManagement")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeLink === "menuManagement"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <UtensilsCrossed size={20} />
        <span>Menu Management</span>
      </button>
      <button
        onClick={() => handleLinkClick("orders")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeLink === "orders"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <Bell size={20} />
        <span>Orders</span>
      </button>
      <button
        onClick={() => handleLinkClick("promotions")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeLink === "promotions"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <Tag size={20} />
        <span>Promotions</span>
      </button>
      <button
        onClick={() => handleLinkClick("customerFeedback")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeLink === "customerFeedback"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <MessageSquare size={20} />
        <span>Customer Feedback</span>
      </button>
    </nav>
  );
}

Navigation.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Navigation;
