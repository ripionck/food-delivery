import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import FiltersSidebar from "./FiltersSidebar";
import RestaurantList from "./RestaurantList";

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
        <RestaurantList viewMode={viewMode} setViewMode={setViewMode} />
      </div>
    </div>
  );
}

export default FoodDiscovery;
