import { Search } from "lucide-react";

function OrderHistory() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold">Order History</h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white">
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {/* Order Item */}
          <div className="border rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 p-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">Order #12345</h3>
                    <p className="text-sm text-gray-500">
                      Delivered on Oct 15, 2023
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full">
                      Delivered
                    </span>
                    <span className="font-semibold">$37.50</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Delivered in 35 mins</span>
                    <span>123 Main St</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <button className="text-orange-500 hover:text-orange-600 font-medium">
                      View Details
                    </button>
                    <button className="text-orange-500 hover:text-orange-600 font-medium">
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 p-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">Order #12344</h3>
                    <p className="text-sm text-gray-500">
                      Delivered on Oct 12, 2023
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full">
                      Delivered
                    </span>
                    <span className="font-semibold">$42.80</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Delivered in 28 mins</span>
                    <span>123 Main St</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <button className="text-orange-500 hover:text-orange-600 font-medium">
                      View Details
                    </button>
                    <button className="text-orange-500 hover:text-orange-600 font-medium">
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 p-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">Order #12343</h3>
                    <p className="text-sm text-gray-500">
                      Cancelled on Oct 10, 2023
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-red-50 text-red-600 text-sm rounded-full">
                      Cancelled
                    </span>
                    <span className="font-semibold">$25.90</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Cancelled by user</span>
                    <span>123 Main St</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <button className="text-orange-500 hover:text-orange-600 font-medium">
                      View Details
                    </button>
                    <button className="text-orange-500 hover:text-orange-600 font-medium">
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400">
            Previous
          </button>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
              3
            </button>
            <span className="px-2">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
              8
            </button>
          </div>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
