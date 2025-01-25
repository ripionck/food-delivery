import AppDownload from "../components/appDownload/AppDownload";
import CustomerReviews from "../components/customerReviews/CustomerReviews";
import FeaturedRestaurants from "../components/featuredRestaurants/FeaturedRestaurants";
import FoodDelivery from "../components/foodDelivery/FoodDelivery";
import FoodDiscovery from "../components/foodDiscovery/FoodDiscovery";
import HelpSupport from "../components/helpSupport/HelpSupport";
import HowItWorks from "../components/howItWorks/HowItWorks";
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

      <FoodDiscovery />
      <FoodDelivery />
      <FeaturedRestaurants />
      <PopularCuisines />
      <HowItWorks />
      <CustomerReviews />
      <AppDownload />
      <HelpSupport />
    </div>
  );
}

export default Home;
