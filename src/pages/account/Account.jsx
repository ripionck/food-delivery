import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import Navigation from "./Navigation";
import ProfileForm from "./ProfileForm";
import NotificationPreferences from "./NotificationPreferences";
import AccountSecurity from "./AccountSecurity";

function Account() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@email.com",
    phone: "+1 234 567 8900",
  });

  const [notifications, setNotifications] = useState({
    orders: true,
    delivery: true,
    promotional: false,
  });

  const [selectedSection, setSelectedSection] = useState("profile");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const renderContent = () => {
    switch (selectedSection) {
      case "profile":
        return (
          <>
            <h1 className="text-2xl font-semibold mb-6">Profile Details</h1>
            <ProfileForm
              formData={formData}
              handleInputChange={handleInputChange}
            />
            <NotificationPreferences
              notifications={notifications}
              handleNotificationChange={handleNotificationChange}
            />
            <AccountSecurity />
          </>
        );
      case "addresses":
        return <div>Addresses Content</div>;
      case "paymentMethods":
        return <div>Payment Methods Content</div>;
      case "favorites":
        return <div>Favorites Content</div>;
      case "notifications":
        return <div>Notifications Content</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <ProfileHeader />
              <Navigation onSelect={setSelectedSection} />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
