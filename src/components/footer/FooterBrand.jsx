import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

function FooterBrand() {
  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-4">FoodDelivery</h3>
      <p className="text-gray-400 mb-6">
        Making food delivery fast, reliable, and delicious for everyone.
      </p>
      <div className="flex gap-4">
        <a href="#" className="hover:text-white transition-colors">
          <Facebook size={20} />
        </a>
        <a href="#" className="hover:text-white transition-colors">
          <Twitter size={20} />
        </a>
        <a href="#" className="hover:text-white transition-colors">
          <Instagram size={20} />
        </a>
        <a href="#" className="hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
}

export default FooterBrand;
