import { useLoaderData } from "react-router-dom";

const TodoDetails = () => {
  const loaderData = useLoaderData();

  if (loaderData?.error) {
    return <div style={{ color: "red" }}>Error: {loaderData.error}</div>;
  }

  if (!loaderData?.data) {
    return <div>Loading...</div>;
  }

  const todo = loaderData.data;

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
