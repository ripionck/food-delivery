import { useState } from "react";
import {
  ShoppingCart,
  User,
  UserCircle,
  LayoutDashboard,
  LogOut,
  LogIn,
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
            <Link to="/" className="text-gray-700 hover:text-[#FF642F]">
              Home
            </Link>
            <Link
              to="/restaurants"
              className="text-gray-700 hover:text-[#FF642F]"
            >
              Restaurants
            </Link>
            <Link to="/cuisines" className="text-gray-700 hover:text-[#FF642F]">
              Cuisines
            </Link>
            <Link
              to="/track-order"
              className="text-gray-700 hover:text-[#FF642F]"
            >
              Track Order
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-orange-600" />
            </Link>
            <LogIn className="h-6 w-6" />
            <div className="relative">
              <button onClick={toggleProfileMenu}>
                <User className="w-6 h-6 text-gray-700 hover:text-orange-600" />
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
