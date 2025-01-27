import PropTypes from "prop-types";
import { Star } from "lucide-react";

function PopularItem({ item, orders, rating, revenue }) {
  return (
    <tr className="border-t border-gray-100">
      <td className="py-4">{item}</td>
      <td className="py-4">{orders}</td>
      <td className="py-4 flex items-center gap-1">
        {rating}
        <Star className="text-yellow-400" size={16} />
      </td>
      <td className="py-4">{revenue}</td>
    </tr>
  );
}

PopularItem.propTypes = {
  item: PropTypes.string.isRequired,
  orders: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  revenue: PropTypes.string.isRequired,
};

export default PopularItem;
