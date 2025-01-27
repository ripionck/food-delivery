import { useState } from "react";
import Menu from "./Menu";
import Promotions from "./Promotions";
import Feedback from "./Feedback";
import Sidebar from "./Sidebar";
import Orders from "./Orders";
import Dashboard from "./DashboardOverview";
import RestaurantProfile from "./RestaurantProfile";

function RestaurantDashboard() {
  const [selectedSection, setSelectedSection] = useState("dashboard");

  const renderContent = () => {
    switch (selectedSection) {
      case "dashboard":
        return <Dashboard />;
      case "menu":
        return <Menu />;
      case "orders":
        return <Orders />;
      case "promotions":
        return <Promotions />;
      case "feedback":
        return <Feedback />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="w-64 bg-white shadow-sm p-6">
        <RestaurantProfile />
        <Sidebar onSelect={setSelectedSection} />
      </div>

      <div className="flex-1 p-8">{renderContent()}</div>
    </div>
  );
}

export default RestaurantDashboard;
