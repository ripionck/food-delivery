import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/restaurants/Restaurants";
import Cuisines from "./pages/cuisines/Cuisines";
import TrackOrder from "./pages/trackOrder/TrackOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/cuisines" element={<Cuisines />} />
        <Route path="/track-order" element={<TrackOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
