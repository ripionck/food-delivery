import PropTypes from "prop-types";

function NotificationPreferences({ notifications, handleNotificationChange }) {
  return (
    <div className="space-y-4 mt-4">
      <h2 className="text-lg font-semibold">Notification Preferences</h2>
      <div className="space-y-3">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="orders"
            checked={notifications.orders}
            onChange={handleNotificationChange}
            className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
          />
          <span className="text-gray-700">Email notifications for orders</span>
        </label>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="delivery"
            checked={notifications.delivery}
            onChange={handleNotificationChange}
            className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
          />
          <span className="text-gray-700">
            SMS notifications for delivery updates
          </span>
        </label>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="promotional"
            checked={notifications.promotional}
            onChange={handleNotificationChange}
            className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
          />
          <span className="text-gray-700">Promotional emails and offers</span>
        </label>
      </div>
    </div>
  );
}

NotificationPreferences.propTypes = {
  notifications: PropTypes.shape({
    orders: PropTypes.bool.isRequired,
    delivery: PropTypes.bool.isRequired,
    promotional: PropTypes.bool.isRequired,
  }).isRequired,
  handleNotificationChange: PropTypes.func.isRequired,
};

export default NotificationPreferences;
