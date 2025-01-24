import PropTypes from "prop-types";

function SavedItem({ image, name, description, price }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex gap-4">
        <div className="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-gray-600">{description}</p>
              <p className="font-medium text-gray-900 mt-1">${price}</p>
            </div>
            <button className="text-orange-500 hover:text-orange-600 font-medium">
              Move to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

SavedItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default SavedItem;
