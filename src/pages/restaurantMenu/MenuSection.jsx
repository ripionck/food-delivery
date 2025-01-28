import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

function MenuSection({ title, items, addToCart }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

MenuSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      popular: PropTypes.bool,
      description: PropTypes.string.isRequired,
      image: PropTypes.string,
    }),
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default MenuSection;
