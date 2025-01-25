export default function RecentOrders() {
  const orders = [
    {
      id: "#12345",
      restaurant: "Pizza Palace",
      date: "Oct 12, 2023",
      status: "Delivered",
      total: "$35.99",
    },
    {
      id: "#12344",
      restaurant: "Burger King",
      date: "Oct 11, 2023",
      status: "In Progress",
      total: "$28.50",
    },
    {
      id: "#12343",
      restaurant: "Sushi Express",
      date: "Oct 10, 2023",
      status: "Delivered",
      total: "$42.75",
    },
    {
      id: "#12342",
      restaurant: "Taco Bell",
      date: "Oct 09, 2023",
      status: "Delivered",
      total: "$15.99",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
        <a href="#" className="text-orange-500 hover:text-orange-600 text-sm">
          View all
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="px-6 py-3 text-sm font-medium text-gray-500">
                Order ID
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">
                Restaurant
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">
                Date
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-0">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {order.restaurant}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {order.date}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {order.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
