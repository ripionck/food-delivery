import PropTypes from "prop-types";

function ProfileSection({ name, membership, imageUrl }) {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">{membership}</p>
    </div>
  );
}

ProfileSection.propTypes = {
  name: PropTypes.string.isRequired,
  membership: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProfileSection;
