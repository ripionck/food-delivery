import { useEffect, useState } from "react";
import MenuCategories from "./MenuCategories";
import MenuSection from "./MenuSection";
import RestaurantDetails from "./RestaurantDetails";

export default function RestaurantMenu() {
  const [menuData, setMenuData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("/menus.json");
        if (!response.ok) throw new Error("Failed to fetch menu data");
        const data = await response.json();
        setMenuData(data.menus);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const getCategories = (menuData) => {
    if (!menuData) return [];
    const categoryMap = {};
    Object.values(menuData).forEach((menuItems) => {
      menuItems.forEach((item) => {
        categoryMap[item.category] = (categoryMap[item.category] || 0) + 1;
      });
    });
    return Object.entries(categoryMap).map(([name, count]) => ({
      name,
      count,
    }));
  };

  const categories = menuData ? getCategories(menuData) : [];

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const filterItems = (items) => {
    return items.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  if (loading) return <div className="text-center py-8">Loading menu...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <RestaurantDetails />
      <MenuCategories
        categories={[
          { name: "All", count: Object.values(menuData).flat().length },
          ...categories,
        ]}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <div className="max-w-7xl mx-auto px-4 py-6">
        {Object.entries(menuData).map(([menuId, items]) => {
          const filteredItems = filterItems(items);
          return filteredItems.length > 0 ? (
            <MenuSection
              key={menuId}
              title={`Menu ${menuId}`}
              items={filteredItems.map((item) => ({
                ...item,
                popular: item.isPopular,
                cover: item.cover || "/placeholder.svg",
              }))}
              addToCart={addToCart}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
