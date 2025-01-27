const orders = [
  {
    id: "#ORD-001",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder.svg",
    },
    items: [
      { name: "Classic Burger", quantity: 2 },
      { name: "French Fries", quantity: 1 },
    ],
    total: "$35.97",
    status: "Preparing",
    time: "5 mins ago",
  },
  {
    id: "#ORD-002",
    customer: {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/placeholder.svg",
    },
    items: [{ name: "Margherita Pizza", quantity: 1 }],
    total: "$14.99",
    status: "Ready",
    time: "15 mins ago",
  },
  {
    id: "#ORD-003",
    customer: {
      name: "Mike Johnson",
      email: "mike@example.com",
      avatar: "/placeholder.svg",
    },
    items: [
      { name: "Caesar Salad", quantity: 1 },
      { name: "Iced Tea", quantity: 1 },
    ],
    total: "$12.98",
    status: "New",
    time: "Just now",
  },
];

export default function Orders() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Orders Management</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search orders..."
              className="px-4 py-2 border rounded-lg"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
              Export Orders
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b px-6 py-3">
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg">
                All Orders
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
                New
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
                Preparing
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
                Ready
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
                Delivered
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
                Cancelled
              </button>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="px-6 py-3 font-medium">ORDER ID</th>
                <th className="px-6 py-3 font-medium">CUSTOMER</th>
                <th className="px-6 py-3 font-medium">ITEMS</th>
                <th className="px-6 py-3 font-medium">TOTAL</th>
                <th className="px-6 py-3 font-medium">STATUS</th>
                <th className="px-6 py-3 font-medium">TIME</th>
                <th className="px-6 py-3 font-medium">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="px-6 py-4">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={order.customer.avatar || "/placeholder.svg"}
                        alt=""
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <div className="font-medium">{order.customer.name}</div>
                        <div className="text-sm text-gray-500">
                          {order.customer.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {order.items.map((item, index) => (
                      <div key={index}>
                        {item.quantity}x {item.name}
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-4">{order.total}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm
                      ${
                        order.status === "Ready"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Preparing"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{order.time}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-green-600 hover:text-green-900">
                        Update
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="px-6 py-4 border-t">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing 1 to 3 of 12 results
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 bg-orange-500 text-white rounded">
                  1
                </button>
                <button className="px-3 py-1 border rounded hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 border rounded hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-1 border rounded hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
