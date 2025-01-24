function SavedItems() {
  const items = [
    {
      id: 1,
      name: "Spicy Chicken Pizza",
      restaurant: "Italian Delight",
      description: "Spicy chicken, bell peppers, onions, mozzarella",
      price: "$16.99",
      isPopular: false,
    },
    {
      id: 2,
      name: "Dragon Roll",
      restaurant: "Sushi Master",
      description: "Eel, cucumber, avocado, special sauce",
      price: "$14.99",
      isPopular: false,
    },
    {
      id: 3,
      name: "Butter Chicken",
      restaurant: "Spice Garden",
      description: "Creamy tomato sauce, tender chicken, herbs",
      price: "$18.99",
      isPopular: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Saved Items</h2>
        <div className="flex gap-4 text-sm">
          <button className="text-gray-600 hover:text-gray-900">
            List View
          </button>
          <button className="text-orange-500 font-medium">Grid View</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            {/* Image Placeholder */}
            <div className="bg-gray-200 h-36 flex justify-center items-center relative">
              <span className="text-gray-400">Image Placeholder</span>
              {item.isPopular && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                  Popular
                </span>
              )}
              <div className="absolute top-4 right-4">
                <button className="w-6 h-6 bg-white border rounded-full"></button>
              </div>
            </div>

            {/* Item Info */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <span className="text-gray-900 font-medium">{item.price}</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{item.restaurant}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>

            {/* Add to Cart Button */}
            <div className="p-4">
              <button className="w-full py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Items Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-transparent text-orange-500 font-medium hover:text-orange-600 transition">
          Load More Items
        </button>
      </div>
    </section>
  );
}

export default SavedItems;
