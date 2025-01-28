import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

function CuisineFilter({ cuisines, selectedCuisine, setSelectedCuisine }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("left")}
        className="absolute -left-1 top-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-hidden scrollbar-hide pb-4 mb-8 px-8"
      >
        {cuisines?.map((cuisine) => (
          <button
            key={cuisine}
            onClick={() => setSelectedCuisine(cuisine)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              selectedCuisine === cuisine
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cuisine}
          </button>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute -right-1 top-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}

CuisineFilter.propTypes = {
  cuisines: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCuisine: PropTypes.string.isRequired,
  setSelectedCuisine: PropTypes.func.isRequired,
};

export default CuisineFilter;
