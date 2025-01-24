import FeaturedRestaurants from "../components/featuredRestaurants/FeaturedRestaurants";
import FoodDelivery from "../components/foodDelivery/FoodDelivery";
import FoodDiscovery from "../components/foodDiscovery/FoodDiscovery";
import HowItWorks from "../components/howItWorks/HowItWorks";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import PopularCuisines from "../components/popularCuisines/PopularCuisines";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20225240-DEOaQIeIDdmMtVDdY1aQiGP7znQBR8.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      <Header />
      <FoodDiscovery />
      <FoodDelivery />
      <FeaturedRestaurants />
      <PopularCuisines />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Home;
