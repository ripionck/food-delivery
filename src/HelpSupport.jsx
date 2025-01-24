import { useState } from "react";
import {
  MessageSquare,
  Phone,
  Mail,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";

function HelpSupport() {
  const [openFaq, setOpenFaq] = useState(null);

  const helpTopics = [
    { title: "Order Issues", href: "#" },
    { title: "Payment & Refunds", href: "#" },
    { title: "Account & Profile", href: "#" },
    { title: "Delivery Information", href: "#" },
  ];

  const faqs = [
    {
      question: "How do I track my order?",
      answer:
        "You can track your order in real-time through our app or website. Once your order is confirmed, you'll receive a tracking link that shows the current status and location of your delivery.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, digital wallets, and cash on delivery. All online payments are processed securely through our platform.",
    },
    {
      question: "How do I cancel my order?",
      answer:
        "You can cancel your order through the app or website within 5 minutes of placing it. After that, please contact our customer support for assistance with cancellation.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "Refunds are processed within 5-7 business days for eligible orders. The refund amount will be credited back to the original payment method used for the order.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Help & Support
        </h1>
        <p className="text-gray-600">
          Find answers to common questions or get in touch with our support team
        </p>
      </div>

      {/* Support Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Live Support Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">Live Support</h2>
              <p className="text-sm text-gray-500">Available 24/7</p>
            </div>
          </div>
          <button className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Start Chat
          </button>
        </div>

        {/* Contact Us Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900 mb-4">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <div className="font-medium">Phone Support</div>
                <a
                  href="tel:1-800-123-4567"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  1-800-123-4567
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <div className="font-medium">Email Support</div>
                <a
                  href="mailto:support@foodapp.com"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  support@foodapp.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Help Topics Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900 mb-4">Help Topics</h2>
          <div className="space-y-2">
            {helpTopics.map((topic, index) => (
              <a
                key={index}
                href={topic.href}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-700">{topic.title}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                {openFaq === index ? (
                  <Minus className="w-5 h-5 text-gray-400" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HelpSupport;
