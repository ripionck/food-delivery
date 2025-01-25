import PropTypes from "prop-types";

function CuisineCard({ cuisine }) {
  return (
    <div
      key={cuisine.name}
      className="bg-[#FFF8F3] rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="w-16 h-16 rounded-full bg-[#FFF0E6] flex items-center justify-center mb-4">
        <cuisine.icon className="w-8 h-8 text-[#FF642F]" />
      </div>
      <h3 className="font-medium text-gray-900 mb-1">{cuisine.name}</h3>
      <p className="text-sm text-gray-500">{cuisine.dishes}</p>
    </div>
  );
}

CuisineCard.propTypes = {
  cuisine: PropTypes.shape({
    name: PropTypes.string.isRequired,
    dishes: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
  }).isRequired,
};

export default CuisineCard;
