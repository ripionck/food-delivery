import { MapPin, Utensils, CreditCard, Bike, ArrowRight } from "lucide-react";
import StepCard from "./StepCard";

function HowItWorks() {
  const steps = [
    {
      icon: MapPin,
      title: "Set Your Location",
      description: "Choose your delivery location to find nearby restaurants",
    },
    {
      icon: Utensils,
      title: "Choose Restaurant",
      description: "Browse restaurants and pick your favorite dishes",
    },
    {
      icon: CreditCard,
      title: "Make Payment",
      description: "Pay with your preferred payment method securely",
    },
    {
      icon: Bike,
      title: "Fast Delivery",
      description: "Track your order in real-time until delivery",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">How It Works</h2>
        <p className="text-gray-600">Order food in 4 simple steps</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <StepCard key={step.title} step={step} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="inline-flex items-center px-6 py-3 bg-[#FF642F] text-white font-medium rounded-full hover:bg-[#ff5216] transition-colors">
          Order Now
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </section>
  );
}

export default HowItWorks;
