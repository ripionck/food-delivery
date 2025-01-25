import { Edit, Trash2 } from "lucide-react";

const menuItems = [
  {
    name: "Classic Burger",
    description: "Beef patty with lettuce, tomato, and special sauce",
    price: "$12.99",
    status: "Available",
  },
  {
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, and basil",
    price: "$14.99",
    status: "Available",
  },
  {
    name: "Caesar Salad",
    description: "Romaine lettuce, croutons, parmesan",
    price: "$8.99",
    status: "Out of Stock",
  },
  {
    name: "Chocolate Cake",
    description: "Rich chocolate cake with ganache",
    price: "$6.99",
    status: "Available",
  },
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Menu Management</h1>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
            Add New Item
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b px-6 py-3">
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg">
                All Items
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
                Appetizers
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
                Main Course
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
                Desserts
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
                Beverages
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {menuItems.map((item) => (
              <div key={item.name} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <span className="text-lg font-semibold">{item.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={`px-2 py-1 rounded-full text-sm
                    ${
                      item.status === "Available"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.status}
                  </span>
                  <div className="flex gap-2">
                    <button className="p-1 text-gray-600 hover:text-indigo-600">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="p-1 text-gray-600 hover:text-red-600">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
