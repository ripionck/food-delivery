import CartItem from "./CartItem";
import SavedItem from "./SavedItem";
import OrderSummary from "./OrderSummary";

function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

            <div className="space-y-4">
              <CartItem
                image="/placeholder.svg?height=96&width=96"
                name="Margherita Pizza"
                description="Italian Delight"
                details="Extra cheese, oregano"
                price="18.00"
                quantity={2}
              />
              <CartItem
                image="/placeholder.svg?height=96&width=96"
                name="California Roll"
                description="Sushi Master"
                details="8 pieces"
                price="12.00"
                quantity={1}
              />
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Saved for Later</h2>
              <SavedItem
                image="/placeholder.svg?height=96&width=96"
                name="Chicken Tikka"
                description="Spice Garden"
                price="15.00"
              />
            </div>
          </div>

          <div className="lg:w-96">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
