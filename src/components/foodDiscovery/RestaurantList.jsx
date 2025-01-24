import { LayoutGrid, List } from "lucide-react";
import PropTypes from "prop-types";

function RestaurantList({ viewMode, setViewMode }) {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Popular Near You</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded ${
              viewMode === "grid"
                ? "bg-orange-50 text-orange-500"
                : "text-gray-500"
            }`}
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded ${
              viewMode === "list"
                ? "bg-orange-50 text-orange-500"
                : "text-gray-500"
            }`}
          >
            <List className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow-sm h-48" />
        ))}
      </div>
    </div>
  );
}

RestaurantList.propTypes = {
  viewMode: PropTypes.oneOf(["grid", "list"]).isRequired,
  setViewMode: PropTypes.func.isRequired,
};

export default RestaurantList;
