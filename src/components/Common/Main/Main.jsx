import PropTypes from "prop-types";

function Main({ children }) {
  return <main className="flex-1bg-gray-100 pt-2">{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
