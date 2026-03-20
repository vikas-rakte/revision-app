import { useDispatch, useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
import { type AppDispatch } from "../../../store";
import { setTodos, todosSelectors } from "../todos-slice/todo.slice";
import type { Todo } from "../todos.types";
import { useEffect } from "react";

const Todos = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loaderTodos = useLoaderData();
  const todos = useSelector(todosSelectors.selectAll) as Todo[];

  useEffect(() => {
    if (todos.length === 0) dispatch(setTodos(loaderTodos));
  }, [dispatch, loaderTodos, todos.length]);

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo: Todo) => (
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
