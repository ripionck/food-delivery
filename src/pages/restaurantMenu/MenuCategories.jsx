import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function MenuCategories() {
  const categories = [
    { name: "Popular", count: 6 },
    { name: "Soup", count: 2 },
    { name: "Pizza", count: 8 },
    { name: "Specialty Milkshakes", count: 8 },
    { name: "Hot Chocolate", count: 8 },
    { name: "Coffee", count: 14 },
    { name: "Iced Drinks", count: 14 },
    { name: "Sweet Treat", count: 6 },
    { name: "Salads", count: 5 },
    { name: "Burgers", count: 7 },
    { name: "Pasta", count: 9 },
    { name: "Desserts", count: 10 },
    { name: "Beverages", count: 12 },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center">
          <div className="relative min-w-[200px] z-10">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search in menu"
              className="w-full pl-9 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
            />
          </div>

          <div className="relative flex-1 flex items-center">
            <button
              onClick={scrollLeft}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div
              ref={scrollRef}
              className="flex items-center gap-2 overflow-hidden px-6 py-4 mx-6"
              style={{ scrollBehavior: "smooth", width: "800px" }}
            >
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-36 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white shadow-md hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
