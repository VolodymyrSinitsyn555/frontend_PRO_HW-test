import './profileCatd.css';

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img className="profile-avatar" src={user.avatar} alt={`${user.name} avatar`} />
      <h2 className="profile-name">{user.name}</h2>
      <p className="profile-occupation">{user.occupation}</p>
      <p className="profile-hobbies">Hobby: {user.hobbies}</p>
    </div>
  );
}

export default ProfileCard;
