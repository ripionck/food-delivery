import { Clock, DollarSign, ShoppingBag, Star } from "lucide-react";
import PopularItem from "./components/PopularItem";
import StatsCard from "./components/StatsCard";

const recentOrders = [
  {
    id: "#ORD-001",
    customer: "John Doe",
    items: 3,
    total: "$45.00",
    status: "Completed",
  },
  {
    id: "#ORD-002",
    customer: "Jane Smith",
    items: 2,
    total: "$32.50",
    status: "Pending",
  },
  {
    id: "#ORD-003",
    customer: "Mike Johnson",
    items: 4,
    total: "$78.00",
    status: "Processing",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
            Generate Report
          </button>
        </div>

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

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Items</th>
                  <th className="pb-3 font-medium">Total</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-3">{order.id}</td>
                    <td className="py-3">{order.customer}</td>
                    <td className="py-3">{order.items}</td>
                    <td className="py-3">{order.total}</td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-sm
                        ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
    </div>
  );
}
