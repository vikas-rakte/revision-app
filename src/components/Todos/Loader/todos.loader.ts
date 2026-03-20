import { getTodos } from "../todos.api";

export const todoLoader = async () => {
  const res = await getTodos();
  return res; 
};