import "./user.css";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { addManyUsers, type AppDispatch, type RootState } from "../../store";
import { useEffect } from "react";

const Users = () => {
  const dispatch = useDispatch<AppDispatch>();
  const usersEntity = useSelector((state: RootState) => state.Users);

  const users = usersEntity.ids.map((id) => usersEntity.entities[id]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      dispatch(addManyUsers(data));
    };
    getUsers();
  }, []);

  return (
    <>
      <div className="users-card-container">
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    </>
  );
};

export default Users;
