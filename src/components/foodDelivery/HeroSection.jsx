import { MapPin } from "lucide-react";
import PropTypes from "prop-types";

function HeroSection({ address, setAddress }) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Delicious Food
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#FF5722]">
          Delivered to Your Door
        </h2>
      </div>

      <p className="text-lg text-gray-600 max-w-xl">
        Order from your favorite restaurants and track your delivery in
        real-time. Get fresh food delivered within minutes.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your delivery address"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        <button className="bg-[#FF5722] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#F4511E] transition-colors">
          Find Food
        </button>
      </div>

      <div className="flex flex-wrap gap-8 pt-4">
        <div className="flex items-center gap-2">
          <span className="text-[#FF5722]">🚀</span>
          <span className="text-gray-700">Fast Delivery</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#FF5722]">🔒</span>
          <span className="text-gray-700">Secure Payment</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#FF5722]">⭐</span>
          <span className="text-gray-700">Best Quality</span>
        </div>
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  address: PropTypes.string.isRequired,
  setAddress: PropTypes.func.isRequired,
};

export default HeroSection;
