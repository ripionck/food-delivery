import MenuCategories from "./MenuCategories";
import MenuSection from "./MenuSection";
import RestaurantDetails from "./RestaurantDetails";

export default function RestaurantMenu() {
  const popularItems = [
    {
      name: "Hot Chocolate Lava Cake",
      price: 780,
      description:
        "Prepared with molten chocolate centre & vanilla ice cream with chocolate sauce",
      image: "https://shorturl.at/B0FC0",
      popular: true,
    },
    {
      name: "Mac & Cheese",
      price: 1330,
      description:
        "Prepared with macaroni, english cheddar bechamel & turkey bacon",
      image: "https://shorturl.at/XaYlx",
    },
    {
      name: "Hot Chocolate Lava Cake",
      price: 780,
      description:
        "Prepared with molten chocolate centre & vanilla ice cream with chocolate sauce",
      image: "https://shorturl.at/B0FC0",
      popular: true,
    },
    {
      name: "Mac & Cheese",
      price: 1330,
      description:
        "Prepared with macaroni, english cheddar bechamel & turkey bacon",
      image: "https://shorturl.at/XaYlx",
    },
  ];

  const snacks = [
    {
      name: "French Fries",
      price: 550,
      description: "Prepared with crispy fries served with ketchup",
      image: "https://shorturl.at/XaYlx",
    },
    {
      name: "Pizza Fries",
      price: 850,
      description:
        "Prepared with fries, pepperoni, spicy tomato sauce & cheese",
      image: "https://shorturl.at/XaYlx",
    },
    {
      name: "French Fries",
      price: 550,
      description: "Prepared with crispy fries served with ketchup",
      image: "https://shorturl.at/XaYlx",
    },
    {
      name: "Pizza Fries",
      price: 850,
      description:
        "Prepared with fries, pepperoni, spicy tomato sauce & cheese",
      image: "https://shorturl.at/XaYlx",
    },
  ];

  const brunch = [
    {
      name: "B's Signature Waffles",
      fromPrice: 610,
      description:
        "Prepared with chocolate sauce & ice cream or honey or maple syrup",
      image: "https://shorturl.at/XaYlx",
    },
    {
      name: "French Toast",
      fromPrice: 690,
      description:
        "Prepared with cinnamon & honey or chocolate & berries or caramel",
      image: "https://shorturl.at/XaYlx",
    },
    {
      name: "B's Signature Waffles",
      fromPrice: 610,
      description:
        "Prepared with chocolate sauce & ice cream or honey or maple syrup",
      image: "https://shorturl.at/XaYlx",
    },
    {
      name: "French Toast",
      fromPrice: 690,
      description:
        "Prepared with cinnamon & honey or chocolate & berries or caramel",
      image: "https://shorturl.at/XaYlx",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <RestaurantDetails />
      <MenuCategories />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <MenuSection title="Popular" items={popularItems} />
        <MenuSection title="Snacks" items={snacks} />
        <MenuSection title="All Day Brunch" items={brunch} />
      </div>
    </div>
  );
}
