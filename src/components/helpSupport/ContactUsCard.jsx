import PropTypes from "prop-types";
import { Phone, Mail } from "lucide-react";

function ContactUsCard({ phone, email }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="font-semibold text-gray-900 mb-4">Contact Us</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Phone className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Phone Support</h3>
            <p className="text-sm text-gray-500">{phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <Mail className="w-5 h-5 text-purple-500" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Email Support</h3>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ContactUsCard.propTypes = {
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ContactUsCard;
