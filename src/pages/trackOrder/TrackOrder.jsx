import { Check, ChefHat, Bike, Home } from "lucide-react";
import OrderHeader from "./OrderHeader";
import TimelineItem from "./TimelineItem";
import DeliveryPartner from "./DeliveryPartner";
import DeliveryLocation from "./DeliveryLocation";
import ActionButtons from "./ActionButtons";

function TrackOrder() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl space-y-6">
        <OrderHeader
          orderId="2391"
          estimatedDelivery="25-30 mins"
          status="In Transit"
        />

        <div className="space-y-6 relative before:absolute before:left-[27px] before:top-[28px] before:bottom-[28px] before:w-0.5 before:bg-gray-200">
          <TimelineItem
            icon={<Check className="w-6 h-6 text-green-500" />}
            title="Order Confirmed"
            description="Your order has been received"
            time="2:30 PM"
            bgColor="bg-green-100"
            textColor="text-gray-400"
          />
          <TimelineItem
            icon={<ChefHat className="w-6 h-6 text-green-500" />}
            title="Preparing"
            description="Restaurant is preparing your food"
            time="2:45 PM"
            bgColor="bg-green-100"
            textColor="text-gray-400"
          />
          <TimelineItem
            icon={<Bike className="w-6 h-6 text-orange-500" />}
            title="On the Way"
            description="Your order is on the way"
            time="3:00 PM"
            bgColor="bg-orange-100"
            textColor="text-gray-400"
          />
          <TimelineItem
            icon={<Home className="w-6 h-6 text-gray-400" />}
            title="Delivered"
            description="Estimated delivery time"
            time="3:15 PM"
            bgColor="bg-gray-100"
            textColor="text-gray-400"
          />
        </div>

        <DeliveryPartner
          name="Michael Johnson"
          id="DL45692"
          imageUrl="https://avatar.iran.liara.run/public"
        />

        <DeliveryLocation
          locationName="Home"
          address="123 Main Street, Apt 4B
          New York, NY 10001"
        />

        <ActionButtons />
      </div>
    </div>
  );
}

export default TrackOrder;
