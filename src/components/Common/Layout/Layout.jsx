import PropTypes from "prop-types";
import Main from "../Main/Main";
import Footer from "../Footer/AppFooter";
import Header from "../Header/AppHeader";

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
