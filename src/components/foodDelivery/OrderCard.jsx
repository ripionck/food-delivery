import { ChevronRight, Heart, Tag, Timer, Utensils } from "lucide-react";

function OrderCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full">
      <div className="space-y-6">
        {/* Order Now Section */}
        <div className="flex items-center justify-between mb-6 group-hover:mb-0">
          <div className="flex items-center gap-4">
            <div className="bg-[#FDF8F4] p-3 rounded-lg">
              <Utensils className="w-6 h-6 text-[#FF5722]" />
            </div>
            <div>
              <h3 className="font-semibold">Order Now</h3>
              <p className="text-sm text-gray-500">Fast & Easy</p>
            </div>
          </div>
          <button className="text-[#FF5722] hover:text-[#F4511E]">
            <Heart className="w-6 h-6" />
          </button>
        </div>

        {/* Delivery Time Section */}
        <div className="flex items-center justify-between mb-6 group-hover:mb-0">
          <div className="flex items-center gap-4">
            <div className="bg-[#FDF8F4] p-3 rounded-lg">
              <Timer className="w-6 h-6 text-[#FF5722]" />
            </div>
            <div>
              <h3 className="font-semibold">Delivery Time</h3>
              <p className="text-sm text-gray-500">25-30 min</p>
            </div>
          </div>
          <span className="bg-[#FDF8F4] px-2 py-1 rounded-full text-sm">1</span>
        </div>

        {/* Special Offer Section */}
        <div className="flex items-center justify-between group-hover:mb-0">
          <div className="flex items-center gap-4">
            <div className="bg-[#FDF8F4] p-3 rounded-lg">
              <Tag className="w-6 h-6 text-[#FF5722]" />
            </div>
            <div>
              <h3 className="font-semibold">Special Offer</h3>
              <p className="text-sm text-gray-500">20% off today</p>
            </div>
          </div>
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
