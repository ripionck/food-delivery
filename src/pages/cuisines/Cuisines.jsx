import { useState } from "react";
import CuisineFilter from "./CuisineFilter";
import {
  Pizza,
  IceCreamBowlIcon as Bowl,
  BeefIcon as Burger,
  CherryIcon as ChiliHot,
  Cookie,
} from "lucide-react";

function Cuisines() {
  const cuisines = [
    { name: "Italian", dishes: "150+ dishes", icon: Pizza },
    { name: "Asian", dishes: "200+ dishes", icon: Bowl },
    { name: "American", dishes: "180+ dishes", icon: Burger },
    { name: "Mexican", dishes: "120+ dishes", icon: ChiliHot },
    { name: "Indian", dishes: "160+ dishes", icon: Bowl },
    { name: "Desserts", dishes: "100+ dishes", icon: Cookie },
    { name: "Chinese", dishes: "140+ dishes", icon: Bowl },
    { name: "Japanese", dishes: "130+ dishes", icon: Bowl },
    { name: "Mediterranean", dishes: "90+ dishes", icon: Bowl },
    { name: "Thai", dishes: "80+ dishes", icon: Bowl },
    { name: "Seafood", dishes: "50+ dishes", icon: Bowl },
    { name: "French", dishes: "110+ dishes", icon: Bowl },
  ];

  const [visibleCuisines, setVisibleCuisines] = useState(6);

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
