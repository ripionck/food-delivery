function Pagination() {
  return (
    <div className="flex items-center justify-between mt-6">
      <button className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400">
        Previous
      </button>
      <div className="flex items-center gap-2">
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          3
        </button>
        <span className="px-2">...</span>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          8
        </button>
      </div>
      <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
        Next
      </button>
    </div>
  );
}

export default Pagination;
