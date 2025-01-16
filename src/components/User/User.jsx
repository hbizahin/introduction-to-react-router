
const User = ({ users }) => {
  const { id, name, email, phone } = users;

  return <div>
    <h2>{name}</h2>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
  </div>;
};

export default User;
