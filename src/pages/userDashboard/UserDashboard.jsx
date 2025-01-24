import { useState } from "react";
import ProfileSection from "./dashboard/ProfileSection";
import Navigation from "./dashboard/Navigation";
import StatsCard from "./dashboard/StatsCard";
import RecentOrderItem from "./dashboard/RecentOrderItem";
import { ShoppingBag, Star, MapPin } from "lucide-react";
import OrderHistory from "./OrderHistory";
import SavedItems from "../../Saveditems";

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
              <h2 className="text-xl font-semibold mb-6">Recent Orders</h2>
              <div className="space-y-4">
                <RecentOrderItem
                  restaurant="Italian Restaurant"
                  items={2}
                  total="42.50"
                  status={{
                    label: "Delivered",
                    bgColor: "bg-green-50",
                    textColor: "text-green-600",
                  }}
                />
                <RecentOrderItem
                  restaurant="Burger House"
                  items={3}
                  total="35.80"
                  status={{
                    label: "In Progress",
                    bgColor: "bg-blue-50",
                    textColor: "text-blue-600",
                  }}
                />
              </div>
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
        return <div>Settings Content</div>;
      case "support":
        return <div>Support Content</div>;
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
