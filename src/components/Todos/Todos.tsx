import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addManyTodos, type AppDispatch, type RootState } from "../../store";
import { todoLoader } from "./todosLoader";

const Todos = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    const getTodos = async () => {
      const todos = await todoLoader();
      dispatch(addManyTodos(todos));
    };
    getTodos();
  }, [dispatch]);

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>
              <strong>{todo.title}</strong> {todo.completed ? "✅" : "❌"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
