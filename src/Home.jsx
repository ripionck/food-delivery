import { Search, ShoppingCart, User, Grid, List } from "lucide-react";
import { useState } from "react";

function Home() {
  const [viewType, setViewType] = useState("grid");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background Image */}
      <div
        className="inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-20%20225240-DEOaQIeIDdmMtVDdY1aQiGP7znQBR8.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      {/* Header */}
      <header className="relative z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-[#FF642F] text-2xl font-bold">
                FoodDelivery
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Restaurants
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Cuisines
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Track Order
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-500" />
              <ShoppingCart className="w-5 h-5 text-gray-500" />
              <User className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <div className="relative z-10 bg-white mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center space-x-8">
            {[
              { name: "All", icon: "🍽️" },
              { name: "Pizza", icon: "🍕" },
              { name: "Burger", icon: "🍔" },
              { name: "Asian", icon: "🥢" },
              { name: "Dessert", icon: "🍰" },
            ].map((category) => (
              <button
                key={category.name}
                className="flex flex-col items-center group"
              >
                <span className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-50 group-hover:bg-orange-100">
                  <span className="text-2xl">{category.icon}</span>
                </span>
                <span className="mt-2 text-sm text-gray-600">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                  {["$", "$$", "$$$"].map((price) => (
                    <label key={price} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-gray-600">{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Dietary</h3>
                <div className="space-y-2">
                  {["Vegetarian", "Vegan", "Gluten Free"].map((diet) => (
                    <label key={diet} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-gray-600">{diet}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant List */}
          <div className="flex-1 bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Popular Near You</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewType("grid")}
                  className={`p-2 rounded ${
                    viewType === "grid"
                      ? "bg-orange-50 text-orange-500"
                      : "text-gray-500"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`p-2 rounded ${
                    viewType === "list"
                      ? "bg-orange-50 text-orange-500"
                      : "text-gray-500"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Restaurant Grid/List will go here */}
            <div
              className={`grid ${
                viewType === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              } gap-4`}
            >
              {/* Placeholder for restaurant items */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
