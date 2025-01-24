import {
  Star,
  MapPin,
  Bell,
  Gift,
  Clock,
  Smartphone,
  CirclePlus,
} from "lucide-react";
import DownloadButton from "./DownloadButton";
import FeatureCard from "./FeatureCard";

function AppDownload() {
  const downloadButtons = [
    {
      href: "#",
      icon: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z",
      storeName: "Download on the",
      storeText: "App Store",
    },
    {
      href: "#",
      icon: "M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z",
      storeName: "Get it on",
      storeText: "Google Play",
    },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Track your order from restaurant to delivery",
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Stay updated with order status alerts",
    },
    {
      icon: Gift,
      title: "Exclusive Offers",
      description: "Get app-only deals and discounts",
    },
    {
      icon: Clock,
      title: "Quick Reorder",
      description: "Order again from order history",
    },
  ];

  return (
    <section className="bg-[#FF642F] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Get the Food Delivery App</h2>
              <p className="text-white/90 text-lg">
                Download our mobile app for the best food delivery experience.
                Order food from your favorite restaurants, track deliveries in
                real-time, and earn rewards with every order.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {downloadButtons.map((button, index) => (
                <DownloadButton
                  key={index}
                  href={button.href}
                  icon={button.icon}
                  storeName={button.storeName}
                  storeText={button.storeText}
                />
              ))}
            </div>

            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <div className="bg-white/10 p-2 rounded-full">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-2xl font-bold">4.8/5</div>
                  <div className="text-white/75 text-sm">App Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-white/10 p-2 rounded-full">
                  <CirclePlus />
                </div>
                <div>
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-white/75 text-sm">Downloads</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Smartphone />
              Key Features
            </h3>
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppDownload;
