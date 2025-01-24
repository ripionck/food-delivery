import {
  Home,
  History,
  Heart,
  Settings,
  HelpCircle,
  ShoppingBag,
  Star,
  MapPin,
  Utensils,
} from "lucide-react";

function UserDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm p-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
            <img
              src="https://avatar.iran.liara.run/public"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-sm text-gray-500">Premium Member</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-orange-500 bg-orange-50 rounded-lg"
          >
            <Home size={20} />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <History size={20} />
            <span>Order History</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <Heart size={20} />
            <span>Favorites</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <Settings size={20} />
            <span>Settings</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <HelpCircle size={20} />
            <span>Support</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Orders</p>
                <h3 className="text-2xl font-bold">248</h3>
              </div>
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <ShoppingBag className="text-blue-500" size={20} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">Reward Points</p>
                <h3 className="text-2xl font-bold">1,850</h3>
              </div>
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                <Star className="text-green-500" size={20} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">Saved Address</p>
                <h3 className="text-2xl font-bold">3</h3>
              </div>
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
                <MapPin className="text-purple-500" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Recent Orders</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                  <Utensils className="text-orange-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Italian Restaurant</h3>
                  <p className="text-sm text-gray-500">2 items • $42.50</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full">
                Delivered
              </span>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                  <Utensils className="text-orange-500" size={20} />
                </div>
                <div>
                  <h3 className="font-medium">Burger House</h3>
                  <p className="text-sm text-gray-500">3 items • $35.80</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                In Progress
              </span>
            </div>
          </div>

          <button className="w-full mt-6 text-orange-500 hover:text-orange-600 font-medium">
            View All Orders
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
