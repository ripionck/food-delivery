import { useState } from "react";
import OrderCard from "./OrderCard";
import HeroSection from "./HeroSection";

function FoodDelivery() {
  const [address, setAddress] = useState("");

  return (
    <div className="min-h-screen bg-[#FDF8F4] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroSection address={address} setAddress={setAddress} />
          <div className="lg:flex justify-end">
            <OrderCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDelivery;
