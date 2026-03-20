import "./user.css";
import UserCard from "./UserCard";

import Loader from "../Loader/Loader";
import useUsers from "./useUsers";

const Users = () => {
  const { users, isLoading, isError, error } = useUsers();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>{error?.message || "User fetch failed, please try again!"}</p>;
  }

  if (!users.length) {
    return <p>No users found.</p>;
  }

  return (
    <div className="users-card-container">
      {users.map((user) => {
        return <UserCard key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Users;
