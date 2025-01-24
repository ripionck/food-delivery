import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
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
            <Search className="w-5 h-5 text-gray-500" />
            <ShoppingCart className="w-5 h-5 text-gray-500" />
            <User className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
