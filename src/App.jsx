import AllCuisines from "./AllCuisines";
import AppDownload from "./AppDownload";
import CheckoutForm from "./CheckoutForm";
import CustomerReviews from "./CustomerReviews";
import Footer from "./Footer";
import HelpSupport from "./HelpSupport";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Landing from "./Landing";
import OrderDetails from "./OrderDetails";
import OrderHistory from "./OrderHistory";
import OrderTracking from "./OrderTracking";
import PaymentForm from "./PaymentForm";
import PopularCuisines from "./PopularCuisines";
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
      <Landing />
      <PopularCuisines />
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
