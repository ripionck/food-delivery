import FooterBrand from "../footer/FooterBrand";
import FooterContact from "../footer/FooterContact";
import FooterLinks from "../footer/FooterLinks";
import FooterSupport from "../footer/FooterSupport";
import NewsletterSection from "../footer/NewsletterSection";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <div className="bg-[#0f1629] text-gray-300">
      <NewsletterSection handleSubmit={handleSubmit} />
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterBrand />
          <FooterLinks />
          <FooterSupport />
          <FooterContact />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
