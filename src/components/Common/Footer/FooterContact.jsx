import { Mail, MapPin, Phone } from "lucide-react";

function FooterContact() {
  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <Phone size={18} />
          1-800-123-4567
        </li>
        <li className="flex items-center gap-2">
          <Mail size={18} />
          support@fooddelivery.com
        </li>
        <li className="flex items-center gap-2">
          <MapPin size={18} />
          123 Delivery Street, Food City, FC 12345
        </li>
      </ul>
    </div>
  );
}

export default FooterContact;
