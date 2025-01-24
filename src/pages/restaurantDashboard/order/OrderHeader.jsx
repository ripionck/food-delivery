function OrderHeader() {
  return (
    <div className="flex justify-between items-start mb-8">
      <h1 className="text-2xl font-bold">Order #12345</h1>
      <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">
        On the way
      </span>
    </div>
  );
}

export default OrderHeader;
