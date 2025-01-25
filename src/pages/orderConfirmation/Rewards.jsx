export default function Rewards() {
  const vouchers = [
    {
      title: "New Customer",
      subtitle: "Welcome Offer",
      discount: "20%",
      code: "NEXT200FF",
      validity: "Valid for 7 days",
      bgColor: "bg-orange-500",
    },
    {
      title: "Free Delivery",
      subtitle: "On orders above $20",
      discount: "$0",
      code: "FREEDEL",
      validity: "Valid for 3 days",
      bgColor: "bg-gray-900",
    },
    {
      title: "Weekend Special",
      subtitle: "Saturday & Sunday Only",
      discount: "15%",
      code: "WEEKEND15",
      validity: "Valid on weekends",
      bgColor: "bg-green-500",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Your Rewards & Vouchers</h2>
        <p className="text-gray-600">
          Use these exclusive offers on your next order
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vouchers.map((voucher) => (
          <div
            key={voucher.code}
            className={`${voucher.bgColor} text-white p-6 rounded-lg`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg">{voucher.title}</h3>
                <p className="text-sm opacity-90">{voucher.subtitle}</p>
              </div>
              <span className="text-2xl font-bold">{voucher.discount}</span>
            </div>

            <div className="bg-black bg-opacity-20 p-2 rounded mb-3">
              <code className="font-mono">{voucher.code}</code>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="opacity-75">{voucher.validity}</span>
              <button className="text-white hover:opacity-75 transition-opacity">
                Copy Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
