import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/restaurants/Restaurants";
import Cuisines from "./pages/cuisines/Cuisines";
import OrderTracking from "./pages/orderTracking/OrderTracking";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import Account from "./pages/account/Account";
import Cart from "./pages/cart/Cart";
import RestaurantDashboard from "./pages/dashboard/RestaurantDashboard";
import DeliveryForm from "./pages/deliveryForm/DeliveryForm";
import PaymentForm from "./pages/paymentForm/PaymentForm";
import OrderConfirmation from "./pages/orderConfirmation/OrderConfirmation";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurants />} />
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
