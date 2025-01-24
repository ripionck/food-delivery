function RestaurantProfile() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="/placeholder.svg?height=48&width=48"
          alt="Restaurant Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 className="font-semibold">Italian Cuisine</h2>
        <span className="text-sm text-green-500">Open Now</span>
      </div>
    </div>
  );
}

export default RestaurantProfile;
