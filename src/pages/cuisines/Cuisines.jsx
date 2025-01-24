import { useState } from "react";
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cuisines.slice(0, visibleCuisines).map((cuisine, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-sm rounded-lg flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-full mb-4">
              <cuisine.icon className="text-orange-500 w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {cuisine.name}
            </h3>
            <p className="text-sm text-gray-500">{cuisine.dishes}</p>
          </div>
        ))}
      </div>

      {visibleCuisines < cuisines.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMoreCuisines}
            className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
          >
            Load More Cuisines
          </button>
        </div>
      )}
    </section>
  );
}

export default Cuisines;
