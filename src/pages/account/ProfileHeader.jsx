function ProfileHeader() {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-xl font-semibold">John Smith</h2>
      <p className="text-gray-500">john.smith@email.com</p>
    </div>
  );
}

export default ProfileHeader;
