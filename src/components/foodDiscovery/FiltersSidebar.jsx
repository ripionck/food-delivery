function FiltersSidebar() {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-6">Filters</h2>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Price Range</h3>
            <div className="space-y-2">
              {["$", "$$", "$$$"].map((price) => (
                <div key={price} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <label className="text-sm text-gray-600">{price}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Dietary</h3>
            <div className="space-y-2">
              {["Vegetarian", "Vegan", "Gluten Free"].map((diet) => (
                <div key={diet} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <label className="text-sm text-gray-600">{diet}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltersSidebar;
