import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import FiltersSidebar from "./FiltersSidebar";
import RestaurantList from "./RestaurantList";

const restaurants = [
  {
    id: 1,
    name: "Italian Delight",
    image: "https://shorturl.at/W3ceI",
    status: "Open",
    deliveryTime: "25-35 min",
    rating: 4.5,
    cuisines: ["Italian", "Pizza", "Pasta"],
    distance: "1.2 km away",
    deliveryFee: "$5 delivery",
  },
  {
    id: 2,
    name: "Sushi Master",
    image: "https://shorturl.at/lvQMo",
    status: "Open",
    deliveryTime: "15-25 min",
    rating: 4.8,
    cuisines: ["Japanese", "Sushi", "Asian"],
    distance: "0.8 km away",
    deliveryFee: "$3 delivery",
  },
  {
    id: 3,
    name: "Spice Garden",
    image: "https://shorturl.at/uNCBO",
    status: "Closed",
    deliveryTime: "30-45 min",
    rating: 4.2,
    cuisines: ["Indian", "Curry", "Vegetarian"],
    distance: "2.0 km away",
    deliveryFee: "$4 delivery",
  },
  {
    id: 4,
    name: "Italian Delight",
    image: "https://shorturl.at/W3ceI",
    status: "Open",
    deliveryTime: "25-35 min",
    rating: 4.5,
    cuisines: ["Italian", "Pizza", "Pasta"],
    distance: "1.2 km away",
    deliveryFee: "$5 delivery",
  },
  {
    id: 5,
    name: "Sushi Master",
    image: "https://shorturl.at/lvQMo",
    status: "Open",
    deliveryTime: "15-25 min",
    rating: 4.8,
    cuisines: ["Japanese", "Sushi", "Asian"],
    distance: "0.8 km away",
    deliveryFee: "$3 delivery",
  },
  {
    id: 6,
    name: "Spice Garden",
    image: "https://shorturl.at/uNCBO",
    status: "Closed",
    deliveryTime: "30-45 min",
    rating: 4.2,
    cuisines: ["Indian", "Curry", "Vegetarian"],
    distance: "2.0 km away",
    deliveryFee: "$4 delivery",
  },
];

function FoodDiscovery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div className="container mx-auto px-4 py-8 flex gap-8">
        <FiltersSidebar />
        <RestaurantList
          restaurants={restaurants}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
      </div>
    </div>
  );
}

export default FoodDiscovery;
