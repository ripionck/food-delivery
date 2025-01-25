import { Pencil, Trash2, CreditCard } from "lucide-react";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <main className="p-8 max-w-4xl mx-auto">
          {/* Profile Section */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-20 h-20 rounded-full"
              />
              <div className="ml-6">
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-500">Member since October 2023</p>
                <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                  Change Photo
                </button>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="John"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Doe"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  defaultValue="+1 234 567 890"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                Save Changes
              </button>
            </div>
          </div>

          {/* Delivery Addresses */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Delivery Addresses</h3>
              <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50">
                Add New Address
              </button>
            </div>
            <div className="space-y-4">
              {[
                {
                  type: "Home",
                  address: "123 Main Street, Apt 4B",
                  city: "New York, NY 10001",
                },
                {
                  type: "Work",
                  address: "456 Business Ave",
                  city: "New York, NY 10002",
                },
              ].map((address) => (
                <div
                  key={address.type}
                  className="flex justify-between items-center p-4 border rounded-lg"
                >
                  <div>
                    <h4 className="font-medium">{address.type}</h4>
                    <p className="text-gray-500">{address.address}</p>
                    <p className="text-gray-500">{address.city}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Pencil className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Payment Methods</h3>
              <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50">
                Add New Card
              </button>
            </div>
            <div className="flex justify-between items-center p-4 border rounded-lg">
              <div className="flex items-center">
                <CreditCard className="w-8 h-8 text-gray-400 mr-4" />
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-gray-500">Expires 12/24</p>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-red-600">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
