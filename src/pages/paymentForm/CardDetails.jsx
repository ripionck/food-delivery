function CardDetails() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Card Details</h3>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            placeholder="**** **** **** ****"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            maxLength={19}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="expiry"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Expiry Date
            </label>
            <input
              type="text"
              id="expiry"
              placeholder="MM/YY"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              maxLength={5}
            />
          </div>
          <div>
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              placeholder="***"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              maxLength={3}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="cardholderName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Cardholder Name
          </label>
          <input
            type="text"
            id="cardholderName"
            placeholder="Name on card"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
