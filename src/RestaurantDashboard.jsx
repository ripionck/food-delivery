import {
  LayoutDashboard,
  UtensilsCrossed,
  Bell,
  Tag,
  MessageSquare,
  ShoppingBag,
  DollarSign,
  Star,
  Clock,
  MoreVertical,
} from "lucide-react";

function RestaurantDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm p-6">
        {/* Restaurant Profile */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="/placeholder.svg?height=48&width=48"
              alt="Restaurant Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold">Italian Cuisine</h2>
            <span className="text-sm text-green-500">Open Now</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-orange-500 bg-orange-50 rounded-lg"
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <UtensilsCrossed size={20} />
            <span>Menu Management</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <Bell size={20} />
            <span>Orders</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <Tag size={20} />
            <span>Promotions</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <MessageSquare size={20} />
            <span>Customer Feedback</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Today&apos;s Orders
                </p>
                <h3 className="text-2xl font-bold mb-1">45</h3>
                <span className="text-sm text-green-500">+12.5%</span>
              </div>
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <ShoppingBag className="text-blue-500" size={20} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">Revenue</p>
                <h3 className="text-2xl font-bold mb-1">$1,250</h3>
                <span className="text-sm text-green-500">+8.3%</span>
              </div>
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                <DollarSign className="text-green-500" size={20} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">Avg. Rating</p>
                <h3 className="text-2xl font-bold mb-1">4.8</h3>
                <span className="text-sm text-green-500">+0.2</span>
              </div>
              <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center">
                <Star className="text-yellow-500" size={20} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 mb-1">Active Orders</p>
                <h3 className="text-2xl font-bold mb-1">12</h3>
                <span className="text-sm text-orange-500">In Progress</span>
              </div>
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                <Clock className="text-orange-500" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Current Orders */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">Current Orders</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center font-medium">
                  #2391
                </div>
                <div>
                  <h3 className="font-medium">Table for 2 • $85.00</h3>
                  <p className="text-sm text-gray-500">
                    2x Pasta, 1x Salad, 2x Drinks
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-yellow-50 text-yellow-600 text-sm rounded-full">
                  Preparing
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center font-medium">
                  #2390
                </div>
                <div>
                  <h3 className="font-medium">Delivery • $42.50</h3>
                  <p className="text-sm text-gray-500">1x Pizza, 1x Dessert</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                  Out for Delivery
                </span>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>
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
                <tr className="border-t border-gray-100">
                  <td className="py-4">Margherita Pizza</td>
                  <td className="py-4">124</td>
                  <td className="py-4 flex items-center gap-1">
                    4.8
                    <Star className="text-yellow-400" size={16} />
                  </td>
                  <td className="py-4">$1,860</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-4">Pasta Carbonara</td>
                  <td className="py-4">98</td>
                  <td className="py-4 flex items-center gap-1">
                    4.7
                    <Star className="text-yellow-400" size={16} />
                  </td>
                  <td className="py-4">$1,470</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-4">Tiramisu</td>
                  <td className="py-4">85</td>
                  <td className="py-4 flex items-center gap-1">
                    4.9
                    <Star className="text-yellow-400" size={16} />
                  </td>
                  <td className="py-4">$850</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDashboard;
