import Loader from "../../Loader/Loader";
import useUsers from "../Hooks/useUsers";
import { useNavigate } from "react-router-dom";
import type { User } from "../user.types";
import "../user.css";
import UserCard from "../user-card/user-card";

const Users = () => {
  const { users, isLoading, isError, error } = useUsers();
  const navigator = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>{error?.message || "User fetch failed, please try again!"}</p>;
  }

  if (!users.length) {
    return <p>No users found.</p>;
  }

  const openUserDetails = (user: User) => {
    navigator(`/users/${user.id}`);
  };

  return (
    <div className="users-card-container">
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            user={user}
            openUserDetails={openUserDetails}
          />
        );
      })}
    </div>
  );
};

export default Users;
