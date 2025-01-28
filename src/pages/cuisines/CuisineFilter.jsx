import PropTypes from "prop-types";
import CuisineCard from "./CuisineCard";

function CuisineFilter({ cuisines, visibleCuisines, loadMoreCuisines }) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cuisines.slice(0, visibleCuisines).map((cuisine, index) => (
          <CuisineCard key={index} cuisine={cuisine} />
        ))}
      </div>

      {visibleCuisines < cuisines.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMoreCuisines}
            className="px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition"
          >
            Load More Cuisines
          </button>
        </div>
      )}
    </>
  );
}

CuisineFilter.propTypes = {
  cuisines: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      dishes: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
    }),
  ).isRequired,
  visibleCuisines: PropTypes.number.isRequired,
  loadMoreCuisines: PropTypes.func.isRequired,
};

export default CuisineFilter;
