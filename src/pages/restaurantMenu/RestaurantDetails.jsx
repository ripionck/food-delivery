import { ChevronRight, Info, Star } from "lucide-react";

export default function RestaurantDetails() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            Homepage
          </a>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900">House of Shen</span>
        </nav>

        <div className="flex gap-6">
          <div className="w-40 h-40 rounded-lg overflow-hidden">
            <img
              src="https://shorturl.at/W3ceI"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="flex gap-2 text-sm text-gray-600 mb-2">
              <span>Chinese</span>
              <span>•</span>
              <span>Asian</span>
              <span>•</span>
              <span>Seafood</span>
              <span>•</span>
              <span>Vegetarian</span>
              <span>•</span>
              <span>Meat</span>
            </div>

            <h1 className="text-3xl font-bold mb-4">House of Shen</h1>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-pink-500">
                  Free delivery for first order
                </span>
                <span className="text-gray-600">Tk 99</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span className="text-gray-600">Min. order</span>
                <span>Tk 50</span>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">4.9/5</span>
                <span className="text-gray-600">(500+)</span>
              </div>
              <button className="text-gray-600 hover:text-gray-900">
                See reviews
              </button>
              <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
                <Info className="w-4 h-4" />
                More info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
