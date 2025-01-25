import Footer from "../common/Footer";
import Header from "../common/Header";
import Main from "../common/Main";
import PropTypes from "prop-types";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="My Website" />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Layout;
