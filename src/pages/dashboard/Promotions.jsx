import { Edit, Trash2 } from "lucide-react";

export default function Promotions() {
  const activePromotions = [
    {
      id: 1,
      name: "Happy Hour Special",
      description: "20% off on all beverages from 4 PM to 7 PM",
      status: "Active",
      validUntil: "Dec 31, 2024",
      usage: "45/100",
    },
    {
      id: 2,
      name: "Weekend Bundle",
      description: "Family meal bundle with 15% discount",
      status: "Active",
      validUntil: "Jan 15, 2024",
      usage: "28/50",
    },
    {
      id: 3,
      name: "New Year Special",
      description: "25% off on all menu items on New Year's Eve",
      status: "Scheduled",
      starting: "Dec 31, 2024",
      limit: "200",
    },
  ];

  const expiredPromotions = [
    {
      id: 4,
      name: "Black Friday Sale",
      duration: "Nov 24 - Nov 26",
      usage: "98/100 (98%)",
      revenue: "$1,245",
    },
    {
      id: 5,
      name: "Summer Special",
      duration: "Jun 1 - Aug 31",
      usage: "145/150 (97%)",
      revenue: "$2,890",
    },
  ];

  const performanceMetrics = [
    {
      title: "Total Active Promotions",
      value: "5",
      trend: "↑ 2 from last month",
      trendColor: "text-green-500",
    },
    {
      title: "Total Redemptions",
      value: "283",
      trend: "↑ 12% vs last month",
      trendColor: "text-green-500",
    },
    {
      title: "Revenue Impact",
      value: "$2,845",
      trend: "↑ 8% vs last month",
      trendColor: "text-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Promotions Control</h1>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            Create New Promotion
          </button>
        </div>

        <h2 className="text-lg font-semibold mb-4">Active Promotions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {activePromotions.map((promo) => (
            <div key={promo.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded-full
                      ${
                        promo.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                  >
                    {promo.status}
                  </span>
                  <h3 className="text-lg font-medium mt-2">{promo.name}</h3>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-orange-600">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{promo.description}</p>
              <div className="space-y-2">
                {promo.validUntil && (
                  <div className="text-sm text-gray-500">
                    Valid until: {promo.validUntil}
                  </div>
                )}
                {promo.starting && (
                  <div className="text-sm text-gray-500">
                    Starting: {promo.starting}
                  </div>
                )}
                {promo.usage && (
                  <div>
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>Usage</span>
                      <span>{promo.usage}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-600 h-2 rounded-full"
                        style={{
                          width: `${
                            (Number.parseInt(promo.usage.split("/")[0]) /
                              Number.parseInt(promo.usage.split("/")[1])) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                )}
                {promo.limit && (
                  <div className="text-sm text-gray-500">
                    Limit: {promo.limit}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold mb-4">Promotion Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {performanceMetrics.map((metric) => (
            <div
              key={metric.title}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-sm font-medium text-gray-500">
                {metric.title}
              </h3>
              <p className="text-2xl font-semibold mt-2">{metric.value}</p>
              <p className={`text-sm mt-2 ${metric.trendColor}`}>
                {metric.trend}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold mb-4">Expired Promotions</h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usage
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {expiredPromotions.map((promo) => (
                <tr key={promo.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {promo.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {promo.duration}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{promo.usage}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{promo.revenue}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 hover:text-orange-900">
                    <button>View Report</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
