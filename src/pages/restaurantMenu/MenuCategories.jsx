import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useRef } from "react";
import PropTypes from "prop-types";

export default function MenuCategories({
  categories,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategorySelect,
}) {
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
    <div className="sticky top-0 bg-white z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center">
          <div className="relative mt-1">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>

          <div className="relative flex-1 flex items-center">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex items-center gap-2 overflow-hidden px-6 py-4 mx-4"
              style={{ scrollBehavior: "smooth", width: "920px" }}
            >
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => onCategorySelect(category.name)}
                  className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-colors
                    ${
                      selectedCategory === category.name
                        ? "bg-orange-500 text-white hover:bg-orange-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-20 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

MenuCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }),
  ).isRequired,
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategorySelect: PropTypes.func.isRequired,
};
