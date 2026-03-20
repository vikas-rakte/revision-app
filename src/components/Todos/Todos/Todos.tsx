import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { todoLoader } from "../Loader/todosLoader";
import { type AppDispatch } from "../../../store";
import { setTodos, todosSelectors } from "../Slice/todoSlice";

const Todos = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(todosSelectors.selectAll);

  useEffect(() => {
    const getTodos = async () => {
      const todos = await todoLoader();
      dispatch(setTodos(todos));
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
