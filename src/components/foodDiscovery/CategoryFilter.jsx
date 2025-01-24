import PropTypes from "prop-types";

const categories = [
  { id: "all", name: "All", icon: "🍽️" },
  { id: "pizza", name: "Pizza", icon: "🍕" },
  { id: "burger", name: "Burger", icon: "🍔" },
  { id: "asian", name: "Asian", icon: "🥢" },
  { id: "dessert", name: "Dessert", icon: "🍰" },
];

function CategoryFilter({ activeCategory, setActiveCategory }) {
  return (
    <div className="flex justify-center gap-8 p-4 bg-white shadow-sm">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className="flex flex-col items-center gap-2"
        >
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-colors duration-200 ${
              activeCategory === category.id ? "bg-orange-100" : "bg-orange-50"
            }`}
          >
            {category.icon}
          </div>
          <span className="text-sm text-gray-600">{category.name}</span>
        </button>
      ))}
    </div>
  );
}

CategoryFilter.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};

export default CategoryFilter;
