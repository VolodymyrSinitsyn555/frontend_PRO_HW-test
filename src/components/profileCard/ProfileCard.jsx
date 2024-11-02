function ProfileCard({ user }) {
  return (
    <div>
      <img src={user.avatar} alt={`${user.name} avatar`} />
      <h2>{user.name}</h2>
      <p>{user.occupation}</p>
      <p>Hobby: {user.hobbies}</p>
    </div>
  );
}

export default ProfileCard;
