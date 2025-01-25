import PropTypes from "prop-types";

function CuisineFilter({ cuisines, selectedCuisine, setSelectedCuisine }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-4 mb-8">
      {cuisines.map((cuisine) => (
        <button
          key={cuisine}
          onClick={() => setSelectedCuisine(cuisine)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selectedCuisine === cuisine
              ? "bg-orange-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {cuisine}
        </button>
      ))}
    </div>
  );
}

CuisineFilter.propTypes = {
  cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCuisine: PropTypes.string.isRequired,
  setSelectedCuisine: PropTypes.func.isRequired,
};

export default CuisineFilter;
