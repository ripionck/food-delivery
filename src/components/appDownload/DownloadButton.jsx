import PropTypes from "prop-types";

function DownloadButton({ href, icon, storeName, storeText }) {
  return (
    <a
      href={href}
      className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
    >
      <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d={icon} />
      </svg>
      <div className="text-left">
        <div className="text-xs">{storeName}</div>
        <div className="text-lg font-semibold">{storeText}</div>
      </div>
    </a>
  );
}

DownloadButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  storeName: PropTypes.string.isRequired,
  storeText: PropTypes.string.isRequired,
};

export default DownloadButton;
