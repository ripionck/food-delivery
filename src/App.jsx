import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Common/Layout/Layout";
import Restaurants from "./pages/Restaurants/Restaurants";
import RestaurantMenu from "./pages/RestaurantMenu/RestaurantMenu";
import Cuisines from "./pages/Cuisines/Cuisines";
import OrderTracking from "./pages/OrderTracking/OrderTracking";
import Cart from "./pages/Cart/Cart";
import DeliveryForm from "./pages/Delivery/DeliveryForm";
import PaymentForm from "./pages/Payment/PaymentForm";
import OrderConfirmation from "./pages/OrderConfirmation/OrderConfirmation";
import UserDashboard from "./pages/Dashboard/UserDashboard/UserDashboard";
import RestaurantDashboard from "./pages/Dashboard/RestaurantDashboard/RestaurantDashboard";
import Account from "./pages/Account/Account";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/menu/:id" element={<RestaurantMenu />} />
          <Route path="/cuisines" element={<Cuisines />} />
          <Route path="/track-order" element={<OrderTracking />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<DeliveryForm />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/confirmation" element={<OrderConfirmation />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route
            path="/restaurant-dashboard"
            element={<RestaurantDashboard />}
          />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
