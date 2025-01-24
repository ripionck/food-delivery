function AccountSecurity() {
  return (
    <div className="space-y-4 mt-4">
      <h2 className="text-lg font-semibold">Account Security</h2>
      <div className="space-y-3">
        <button type="button" className="text-orange-500 hover:text-orange-600">
          Change Password
        </button>
        <div>
          <button
            type="button"
            className="text-orange-500 hover:text-orange-600"
          >
            Enable Two-Factor Authentication
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountSecurity;
