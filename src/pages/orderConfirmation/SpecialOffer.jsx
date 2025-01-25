function SpecialOffer() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-2 text-center">Special Offer!</h3>
      <p className="text-gray-300 text-center mb-4">
        Here&apos;s a discount voucher for your next order
      </p>
      <div className="bg-gray-800 p-3 rounded flex justify-between items-center mb-2">
        <span className="font-mono">NEXT200FF</span>
        <button className="text-orange-500 hover:text-orange-400">
          Copy Code
        </button>
      </div>
      <p className="text-xs text-gray-400 text-center">
        Valid for 7 days. Terms & conditions apply.
      </p>
    </div>
  );
}

export default SpecialOffer;
