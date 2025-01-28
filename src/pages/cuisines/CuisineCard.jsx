import PropTypes from "prop-types";

function CuisineCard({ cuisine }) {
  const IconComponent = cuisine.icon;

  return (
    <div className="group relative bg-[#FFF8F3] rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow cursor-pointer min-h-[200px]">
      <div className="w-16 h-16 rounded-full bg-[#FFF0E6] flex items-center justify-center mb-4">
        <IconComponent className="w-8 h-8 text-[#FF642F]" />
      </div>
      <h3 className="font-medium text-gray-900 mb-1">{cuisine.name}</h3>
      <p className="text-sm text-gray-500">{cuisine.dishes}</p>

      <div className="absolute inset-0 bg-black bg-opacity-90 rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white text-sm text-center">{cuisine.description}</p>
      </div>
    </div>
  );
}

CuisineCard.propTypes = {
  cuisine: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    dishes: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
  }).isRequired,
};

export default CuisineCard;
