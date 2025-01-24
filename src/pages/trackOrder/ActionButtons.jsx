function ActionButtons() {
  return (
    <div className="flex gap-4">
      <button className="flex-1 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
        View Order Details
      </button>
      <button className="flex-1 px-6 py-3 text-orange-500 border border-orange-500 rounded-lg hover:bg-orange-50 transition-colors">
        Need Help?
      </button>
    </div>
  );
}

export default ActionButtons;
