import { useState, useEffect } from "react";
import CuisineFilter from "./CuisineFilter";
import * as LucideIcons from "lucide-react";

const iconMap = {
  Pizza: LucideIcons.Pizza,
  Burger: LucideIcons.Beef,
  ChiliHot: LucideIcons.Flame,
  Bowl: LucideIcons.BowlFood,
  Cookie: LucideIcons.Cookie,
  Sushi: LucideIcons.Sushi,
  Ramen: LucideIcons.Udon,
  Taco: LucideIcons.Wheat,
  Curry: LucideIcons.Potato,
  Pho: LucideIcons.Soup,
  Gyro: LucideIcons.Kebab,
  Paella: LucideIcons.Rice,
  BBQ: LucideIcons.Grill,
  IceCream: LucideIcons.IceCream,
  Salad: LucideIcons.Salad,
  Seafood: LucideIcons.Fish,
  Coffee: LucideIcons.Coffee,
  Wine: LucideIcons.Wine,

  Default: LucideIcons.Utensils,
};

function Cuisines() {
  const [cuisines, setCuisines] = useState([]);
  const [visibleCuisines, setVisibleCuisines] = useState(8);

  useEffect(() => {
    fetch("/cuisines.json")
      .then((response) => response.json())
      .then((data) => {
        const mappedCuisines = data.cuisines.map((cuisine) => ({
          ...cuisine,
          icon: iconMap[cuisine.icon] || iconMap.Default,
        }));
        setCuisines(mappedCuisines);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const loadMoreCuisines = () => {
    setVisibleCuisines((prev) => prev + 6);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Cuisines</h1>
      <CuisineFilter
        cuisines={cuisines}
        visibleCuisines={visibleCuisines}
        loadMoreCuisines={loadMoreCuisines}
      />
    </section>
  );
}

export default Cuisines;
