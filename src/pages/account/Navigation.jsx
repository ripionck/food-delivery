import { useState } from "react";
import PropTypes from "prop-types";
import { MapPin, CreditCard, Heart, Bell } from "lucide-react";

function Navigation({ onSelect }) {
  const [activeLink, setActiveLink] = useState("profile");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    onSelect(link);
  };

  return (
    <nav className="space-y-1">
      <button
        onClick={() => handleLinkClick("profile")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeLink === "profile"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <span>Profile Details</span>
      </button>
      <button
        onClick={() => handleLinkClick("addresses")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeLink === "addresses"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <MapPin className="w-5 h-5" />
        <span>Addresses</span>
      </button>
      <button
        onClick={() => handleLinkClick("paymentMethods")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeLink === "paymentMethods"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <CreditCard className="w-5 h-5" />
        <span>Payment Methods</span>
      </button>
      <button
        onClick={() => handleLinkClick("favorites")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeLink === "favorites"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <Heart className="w-5 h-5" />
        <span>Favorites</span>
      </button>
      <button
        onClick={() => handleLinkClick("notifications")}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
          activeLink === "notifications"
            ? "text-orange-500 bg-orange-50"
            : "text-gray-700 hover:bg-gray-50"
        }`}
      >
        <Bell className="w-5 h-5" />
        <span>Notifications</span>
      </button>
    </nav>
  );
}

Navigation.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default Navigation;
