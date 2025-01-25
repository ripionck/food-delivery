import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

export default function MenuSection({ title, items }) {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItem key={item.name} item={item} />
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
      fromPrice: PropTypes.number,
      price: PropTypes.number,
      popular: PropTypes.bool,
      description: PropTypes.string.isRequired,
      image: PropTypes.string,
    }),
  ).isRequired,
};
