import { useState } from "react";
import { ShoppingBag, Star, MapPin } from "lucide-react";
import StatsCard from "./StatsCard";
import RecentOrders from "./RecentOrders";
import OrderHistory from "./OrderHistory";
import SavedItems from "./SavedItems";
import Settings from "./Settings";
import Support from "./Support";
import ProfileSection from "./ProfileSection";
import Navigation from "./Navigation";

function UserDashboard() {
  const [selectedContent, setSelectedContent] = useState("dashboard");

  const renderContent = () => {
    switch (selectedContent) {
      case "dashboard":
        return (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatsCard
                title="Total Orders"
                value="248"
                icon={<ShoppingBag className="text-blue-500" size={20} />}
                bgColor="bg-blue-50"
                textColor="text-blue-500"
              />
              <StatsCard
                title="Reward Points"
                value="1,850"
                icon={<Star className="text-green-500" size={20} />}
                bgColor="bg-green-50"
                textColor="text-green-500"
              />
              <StatsCard
                title="Saved Address"
                value="3"
                icon={<MapPin className="text-purple-500" size={20} />}
                bgColor="bg-purple-50"
                textColor="text-purple-500"
              />
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <RecentOrders />
              <button className="w-full mt-6 text-orange-500 hover:text-orange-600 font-medium">
                View All Orders
              </button>
            </div>
          </div>
        );
      case "orderHistory":
        return <OrderHistory />;
      case "saved":
        return <SavedItems />;
      case "settings":
        return <Settings />;
      case "support":
        return <Support />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm p-6">
        <ProfileSection
          name="John Doe"
          membership="Premium Member"
          imageUrl="https://avatar.iran.liara.run/public"
        />
        <Navigation onSelect={setSelectedContent} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">{renderContent()}</div>
    </div>
  );
}

export default UserDashboard;
