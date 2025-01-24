import { useState } from "react";
import RestaurantProfile from "./dashboard/RestaurantProfile";
import Navigation from "./dashboard/Navigation";
import StatsCard from "./dashboard/StatsCard";
import CurrentOrderItem from "./dashboard/CurrentOrderItem";
import PopularItem from "./dashboard/PopularItem";
import { ShoppingBag, DollarSign, Star, Clock } from "lucide-react";
import OrderDetails from "./OrderDetails";

function RestaurantDashboard() {
  const [selectedSection, setSelectedSection] = useState("dashboard");

  const renderContent = () => {
    switch (selectedSection) {
      case "dashboard":
        return (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <StatsCard
                title="Today's Orders"
                value="45"
                percentage="+12.5%"
                icon={<ShoppingBag className="text-blue-500" size={20} />}
                bgColor="bg-blue-50"
                textColor="text-green-500"
              />
              <StatsCard
                title="Revenue"
                value="$1,250"
                percentage="+8.3%"
                icon={<DollarSign className="text-green-500" size={20} />}
                bgColor="bg-green-50"
                textColor="text-green-500"
              />
              <StatsCard
                title="Avg. Rating"
                value="4.8"
                percentage="+0.2"
                icon={<Star className="text-yellow-500" size={20} />}
                bgColor="bg-yellow-50"
                textColor="text-green-500"
              />
              <StatsCard
                title="Active Orders"
                value="12"
                percentage="In Progress"
                icon={<Clock className="text-orange-500" size={20} />}
                bgColor="bg-orange-50"
                textColor="text-orange-500"
              />
            </div>

            {/* Current Orders */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold mb-6">Current Orders</h2>
              <div className="space-y-4">
                <CurrentOrderItem
                  orderId="2391"
                  details="Table for 2 • $85.00"
                  status="Preparing"
                  statusColor="bg-yellow-50 text-yellow-600"
                />
                <CurrentOrderItem
                  orderId="2390"
                  details="Delivery • $42.50"
                  status="Out for Delivery"
                  statusColor="bg-blue-50 text-blue-600"
                />
              </div>
            </div>

            {/* Popular Items */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Popular Items</h2>
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                >
                  View All
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500">
                      <th className="pb-4">Item</th>
                      <th className="pb-4">Orders</th>
                      <th className="pb-4">Rating</th>
                      <th className="pb-4">Revenue</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <PopularItem
                      item="Margherita Pizza"
                      orders={124}
                      rating={4.8}
                      revenue="$1,860"
                    />
                    <PopularItem
                      item="Pasta Carbonara"
                      orders={98}
                      rating={4.7}
                      revenue="$1,470"
                    />
                    <PopularItem
                      item="Tiramisu"
                      orders={85}
                      rating={4.9}
                      revenue="$850"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      case "menuManagement":
        return <div>Menu Management Content</div>;
      case "orders":
        return <OrderDetails />;
      case "promotions":
        return <div>Promotions Content</div>;
      case "customerFeedback":
        return <div>Customer Feedback Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm p-6">
        <RestaurantProfile />
        <Navigation onSelect={setSelectedSection} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">{renderContent()}</div>
    </div>
  );
}

export default RestaurantDashboard;
