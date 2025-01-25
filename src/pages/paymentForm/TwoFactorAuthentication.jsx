import PropTypes from "prop-types";

function TwoFactorAuthentication({ code, handleCodeChange }) {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
        <span className="text-orange-500 text-sm">Required for security</span>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Enter the 4-digit code sent to your phone
      </p>
      <div className="flex gap-3 mb-4">
        {[0, 1, 2, 3].map((index) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength={1}
            value={code[index]}
            onChange={(e) => handleCodeChange(index, e.target.value)}
            className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg font-semibold"
          />
        ))}
      </div>
      <button className="text-orange-500 text-sm hover:text-orange-600">
        Resend Code
      </button>
    </div>
  );
}

TwoFactorAuthentication.propTypes = {
  code: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCodeChange: PropTypes.func.isRequired,
};

export default TwoFactorAuthentication;
