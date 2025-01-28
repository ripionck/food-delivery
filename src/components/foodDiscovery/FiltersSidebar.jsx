import PropTypes from "prop-types";

function FiltersSidebar({
  selectedPriceRanges,
  setSelectedPriceRanges,
  isVegetarian,
  setIsVegetarian,
  isSpicy,
  setIsSpicy,
  isPopular,
  setIsPopular,
}) {
  const priceRanges = [
    { label: "10 - 100$", value: [10, 100] },
    { label: "101 - 200$", value: [101, 200] },
    { label: "201 - 300$", value: [201, 300] },
  ];

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRanges((prev) =>
      prev.some((r) => r[0] === range[0] && r[1] === range[1])
        ? prev.filter((r) => r[0] !== range[0] || r[1] !== range[1])
        : [...prev, range],
    );
  };

  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Filters</h2>
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Price Range</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <div key={range.label} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedPriceRanges.some(
                      (r) => r[0] === range.value[0] && r[1] === range.value[1],
                    )}
                    onChange={() => handlePriceRangeChange(range.value)}
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <label className="text-sm text-gray-600">{range.label}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Dietary</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isVegetarian}
                  onChange={() => setIsVegetarian(!isVegetarian)}
                  className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <label className="text-sm text-gray-600">Vegetarian</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isSpicy}
                  onChange={() => setIsSpicy(!isSpicy)}
                  className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <label className="text-sm text-gray-600">Spicy</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isPopular}
                  onChange={() => setIsPopular(!isPopular)}
                  className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                <label className="text-sm text-gray-600">Popular</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FiltersSidebar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  selectedPriceRanges: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
    .isRequired,
  setSelectedPriceRanges: PropTypes.func.isRequired,
  isVegetarian: PropTypes.bool.isRequired,
  setIsVegetarian: PropTypes.func.isRequired,
  isSpicy: PropTypes.bool.isRequired,
  setIsSpicy: PropTypes.func.isRequired,
  isPopular: PropTypes.bool.isRequired,
  setIsPopular: PropTypes.func.isRequired,
};

export default FiltersSidebar;
