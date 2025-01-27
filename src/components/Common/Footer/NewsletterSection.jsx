import PropTypes from "prop-types";

function NewsletterSection({ handleSubmit }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Subscribe to Our Newsletter
      </h2>
      <p className="mb-8 text-gray-400">
        Get updates about new restaurants, special offers, and exclusive deals
      </p>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg bg-[#1c2537] border border-gray-700 focus:outline-none focus:border-orange-500"
          required
        />
        <button
          type="submit"
          className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

NewsletterSection.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default NewsletterSection;
