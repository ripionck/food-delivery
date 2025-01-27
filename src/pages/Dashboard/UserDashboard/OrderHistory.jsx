import SearchBar from "./SearchBar";
import OrderItem from "./OrderItem";
import Pagination from "./Pagination";

function OrderHistory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold">Order History</h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <SearchBar />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white">
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <OrderItem
            orderId="12345"
            status={{
              label: "Delivered",
              bgColor: "bg-green-50",
              textColor: "text-green-600",
            }}
            date="Delivered on Oct 15, 2023"
            total="37.50"
            deliveryTime="Delivered in 35 mins"
            address="123 Main St"
          />
          <OrderItem
            orderId="12344"
            status={{
              label: "Delivered",
              bgColor: "bg-green-50",
              textColor: "text-green-600",
            }}
            date="Delivered on Oct 12, 2023"
            total="42.80"
            deliveryTime="Delivered in 28 mins"
            address="123 Main St"
          />
          <OrderItem
            orderId="12343"
            status={{
              label: "Cancelled",
              bgColor: "bg-red-50",
              textColor: "text-red-600",
            }}
            date="Cancelled on Oct 10, 2023"
            total="25.90"
            deliveryTime="Cancelled by user"
            address="123 Main St"
          />
        </div>

        <Pagination />
      </div>
    </div>
  );
}

export default OrderHistory;
