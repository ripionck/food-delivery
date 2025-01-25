import PropTypes from "prop-types";

function Main({ children }) {
  return (
    <main className="flex-1 bg-gray-100 pt-2">
      <div className="max-w-7xl mx-auto">{children}</div>
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
