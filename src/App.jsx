import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/restaurants/Restaurants";
import Cuisines from "./pages/cuisines/Cuisines";
import OrderTracking from "./pages/orderTracking/OrderTracking";
import UserDashboard from "./pages/userDashboard/UserDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/cuisines" element={<Cuisines />} />
        <Route path="/track-order" element={<OrderTracking />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
