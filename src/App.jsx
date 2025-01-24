import AllCuisines from "./AllCuisines";
import AppDownload from "./AppDownload";
import CheckoutForm from "./CheckoutForm";
import CustomerReviews from "./CustomerReviews";
import Footer from "./components/layouts/Footer";
import HelpSupport from "./HelpSupport";
import HowItWorks from "./HowItWorks";
import OrderDetails from "./OrderDetails";
import OrderHistory from "./OrderHistory";
import OrderTracking from "./OrderTracking";
import Home from "./pages/Home";
import PaymentForm from "./PaymentForm";
import PopularRestaurants from "./PopularRestaurants";
import ProfileSettings from "./ProfileSettings";
import RestaurantDashboard from "./RestaurantDashboard";
import SavedItems from "./Saveditems";
import ShoppingCart from "./ShoppingCart";
import UserDashboard from "./UserDashboard";

function App() {
  return (
    <div>
      <Home />
      <AllCuisines />
      <HowItWorks />
      <CustomerReviews />
      <AppDownload />
      <HelpSupport />
      <Footer />
      <PopularRestaurants />
      <UserDashboard />
      <OrderHistory />
      <SavedItems />
      <OrderDetails />
      <ProfileSettings />
      <RestaurantDashboard />
      <OrderTracking />
      <ShoppingCart />
      <CheckoutForm />
      <PaymentForm />
    </div>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/blog/:slug" element={<Blog />} />
//         <Route path="/profile" element={<ProfilePage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
