import { ChevronDown, Mail, Phone, MessageCircle } from "lucide-react";

export default function Support() {
  const faqs = [
    {
      question: "How do I track my order?",
      answer:
        "You can track your order in real-time through the 'Order History' section of your dashboard. Click on any active order to view its current status and location.",
    },
    {
      question: "What if my order is late?",
      answer:
        "If your order is taking longer than estimated, please contact our support team. We'll investigate the delay and provide compensation if applicable.",
    },
    {
      question: "How do I cancel my order?",
      answer:
        "You can cancel your order within 5 minutes of placing it through the 'Order History' section. After this window, please contact support for assistance.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
          <p className="mt-4 text-xl text-gray-600">
            Get help with your orders and questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border rounded-lg overflow-hidden"
                    >
                      <button className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      </button>
                      <div className="px-4 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Contact Support</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                    <option>Order Issue</option>
                    <option>Account Issue</option>
                    <option>Payment Issue</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    placeholder="Describe your issue..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-3" />
                    support@foodie.com
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-3" />
                    1-800-FOOD-NOW
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Live Chat (24/7)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
