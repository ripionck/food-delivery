import { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import FiltersSidebar from "./FiltersSidebar";
import RestaurantList from "./RestaurantList";

function FoodDiscovery() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    diets: [],
    searchQuery: "",
    isVegetarian: false,
    isSpicy: false,
    isPopular: false,
  });
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("/restaurants.json");
        if (!response.ok) throw new Error("Failed to fetch restaurants");
        const data = await response.json();
        setRestaurants(data.restaurants);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Generate dynamic categories from cuisines
  const categories = [
    { id: "all", name: "All", icon: "🍽️" },
    ...Array.from(
      new Set(restaurants.flatMap((restaurant) => restaurant.cuisines)),
    ).map((cuisine) => ({
      id: cuisine.toLowerCase(),
      name: cuisine,
      icon: "🍴",
    })),
  ];

  // Filter and search all restaurants
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCategory =
      activeCategory === "all" ||
      restaurant.cuisines.some((c) => c.toLowerCase() === activeCategory);

    const matchesPrice =
      selectedPriceRanges.length === 0 ||
      selectedPriceRanges.some(
        (range) => restaurant.price >= range[0] && restaurant.price <= range[1],
      );

    const matchesDiet =
      filters.diets.length === 0 ||
      filters.diets.every((diet) => restaurant.dietary.includes(diet));

    const matchesSearch =
      restaurant.name
        .toLowerCase()
        .includes(filters.searchQuery.toLowerCase()) ||
      restaurant.cuisines.some((c) =>
        c.toLowerCase().includes(filters.searchQuery.toLowerCase()),
      );

    const matchesVegetarian = !filters.isVegetarian || restaurant.isVegetarian;
    const matchesSpicy = !filters.isSpicy || restaurant.isSpicy;
    const matchesPopular = !filters.isPopular || restaurant.isPopular;

    return (
      matchesCategory &&
      matchesPrice &&
      matchesDiet &&
      matchesSearch &&
      matchesVegetarian &&
      matchesSpicy &&
      matchesPopular
    );
  });

  // Sort the filtered restaurants by distance
  const sortedRestaurants = filteredRestaurants.sort((a, b) => {
    const distanceA = parseFloat(a.distance);
    const distanceB = parseFloat(b.distance);
    return distanceA - distanceB;
  });

  // Select the first 6 restaurants from the sorted list
  const closestRestaurants = sortedRestaurants.slice(0, 6);

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((item) => item !== value)
        : [...prev[type], value],
    }));
  };

  if (loading)
    return <div className="text-center py-8">Loading restaurants...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div className="container mx-auto px-4 py-8 flex gap-8">
        <FiltersSidebar
          onFilterChange={handleFilterChange}
          selectedPriceRanges={selectedPriceRanges}
          setSelectedPriceRanges={setSelectedPriceRanges}
          isVegetarian={filters.isVegetarian}
          setIsVegetarian={(value) =>
            setFilters((prev) => ({ ...prev, isVegetarian: value }))
          }
          isSpicy={filters.isSpicy}
          setIsSpicy={(value) =>
            setFilters((prev) => ({ ...prev, isSpicy: value }))
          }
          isPopular={filters.isPopular}
          setIsPopular={(value) =>
            setFilters((prev) => ({ ...prev, isPopular: value }))
          }
        />
        <RestaurantList
          restaurants={closestRestaurants}
          viewMode={viewMode}
          setViewMode={setViewMode}
          searchQuery={filters.searchQuery}
          setSearchQuery={(value) =>
            setFilters((prev) => ({ ...prev, searchQuery: value }))
          }
        />
      </div>
    </div>
  );
}

export default FoodDiscovery;
