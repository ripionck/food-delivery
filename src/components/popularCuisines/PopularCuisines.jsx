import {
  Pizza,
  IceCreamBowlIcon as Bowl,
  BeefIcon as Burger,
  CherryIcon as ChiliHot,
  Cookie,
  ArrowRight,
} from "lucide-react";
import CuisineCard from "./CuisineCard";
import { Link } from "react-router-dom";

function PopularCuisines() {
  const cuisines = [
    {
      name: "Italian",
      dishes: "150+ dishes",
      icon: Pizza,
    },
    {
      name: "Asian",
      dishes: "200+ dishes",
      icon: Bowl,
    },
    {
      name: "American",
      dishes: "180+ dishes",
      icon: Burger,
    },
    {
      name: "Mexican",
      dishes: "120+ dishes",
      icon: ChiliHot,
    },
    {
      name: "Indian",
      dishes: "160+ dishes",
      icon: Bowl,
    },
    {
      name: "Desserts",
      dishes: "100+ dishes",
      icon: Cookie,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Popular Cuisines
        </h2>
        <p className="text-gray-600">Explore dishes from around the world</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {cuisines.map((cuisine) => (
          <CuisineCard key={cuisine.name} cuisine={cuisine} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/cuisines"
          className="inline-flex items-center text-[#FF642F] font-medium hover:underline"
        >
          Explore All Cuisines
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </section>
  );
}

export default PopularCuisines;
