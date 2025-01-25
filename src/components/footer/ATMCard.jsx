function ATMCard() {
  return (
    <div className="max-w-7xl mx-auto py-4">
      <hr className="border-gray-700 mb-4" />
      <div className="flex justify-between items-center">
        <div>
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          {/* <CreditCard className="w-8 h-8 text-white" />
          <Paypal className="w-8 h-8 text-white" />
          <GooglePay className="w-8 h-8 text-white" /> */}
        </div>
      </div>
    </div>
  );
}

export default ATMCard;
