import { useLoaderData } from "react-router-dom";

const TodoDetails = () => {
  const todo = useLoaderData();

  if (!todo) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo Details</h2>
      <p>
        <strong>ID:</strong> {todo.id}
      </p>
      <p>
        <strong>Title:</strong> {todo.title}
      </p>
      <p>
        <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default TodoDetails;
