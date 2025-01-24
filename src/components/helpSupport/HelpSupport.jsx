import { useState } from "react";
import HelpTopics from "./HelpTopics";
import LiveSupportCard from "./LiveSupportCard";
import ContactUsCard from "./ContactUsCard";
import FAQItem from "./FaqItem";

const faqs = [
  {
    question: "How do I track my order?",
    answer:
      "You can track your order by clicking on the 'Orders' section in your account and selecting the specific order you'd like to track.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and digital wallets including Apple Pay and Google Pay.",
  },
  {
    question: "How do I cancel my order?",
    answer:
      "To cancel your order, please go to your order details and click the 'Cancel Order' button. Note that orders can only be cancelled within 5 minutes of placing them.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Refunds are processed within 3-5 business days of cancellation. The refund will be credited back to the original payment method used for the purchase.",
  },
];

const helpTopics = [
  "Order Issues",
  "Payment & Refunds",
  "Account & Profile",
  "Delivery Information",
];

function HelpSupport() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Help & Support
          </h1>
          <p className="text-gray-600">
            Find answers to common questions or get in touch with our support
            team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <LiveSupportCard onClick={() => console.log("Start Chat")} />
          <ContactUsCard phone="1-800-123-4567" email="support@foodapp.com" />
          <HelpTopics topics={helpTopics} />
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpSupport;
