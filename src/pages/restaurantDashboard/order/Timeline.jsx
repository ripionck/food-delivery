function Timeline() {
  return (
    <div className="relative mb-12">
      <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200">
        <div className="absolute top-0 left-0 h-full bg-orange-500 w-3/4"></div>
      </div>
      <div className="relative flex justify-between">
        {/* Confirmed */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mb-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="font-medium text-sm">Confirmed</span>
          <span className="text-gray-500 text-xs">12:30 PM</span>
        </div>

        {/* Preparing */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mb-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="font-medium text-sm">Preparing</span>
          <span className="text-gray-500 text-xs">12:45 PM</span>
        </div>

        {/* On the way */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mb-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="font-medium text-sm">On the way</span>
          <span className="text-gray-500 text-xs">1:00 PM</span>
        </div>

        {/* Delivered */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          </div>
          <span className="font-medium text-sm text-gray-400">Delivered</span>
          <span className="text-gray-400 text-xs">Est. 1:15 PM</span>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
