import { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  UserCircle,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className="relative z-10 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-[#FF642F] text-2xl font-bold">
              FoodDelivery
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link
              to="/restaurants"
              className="text-gray-700 hover:text-gray-900"
            >
              Restaurants
            </Link>
            <Link to="/cuisines" className="text-gray-700 hover:text-gray-900">
              Cuisines
            </Link>
            <Link
              to="/track-order"
              className="text-gray-700 hover:text-gray-900"
            >
              Track Order
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            </div>
            <Link to="/cart">
              <ShoppingCart className="w-5 h-5 text-gray-500" />
            </Link>
            <div className="relative">
              <button onClick={toggleProfileMenu}>
                <User className="w-5 h-5 text-gray-500" />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <Link
                    to="/account"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <UserCircle className="w-4 h-4 mr-2" />
                    Account
                  </Link>
                  <Link
                    to="/user-dashboard"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </Link>
                  <Link
                    to="/restaurant-dashboard"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Dashboard
                  </Link>
                  <Link
                    to="/logout"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
