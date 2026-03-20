import { apiClient } from "../../api/client"
import { ENDPOINTS } from "../../api/endpoints"
import type { Todo } from "./todos.types";


export const getTodos = async ():Promise<Todo[]> => {
    const { data }  =  await apiClient.get(ENDPOINTS.TODOS.BASE);
   return data;
}

export const getTodo = async (id: string): Promise<Todo> => {
  const { data } = await apiClient.get(ENDPOINTS.TODOS.BY_ID(id));
  return data;
};

export const createTodo = async (todo: Todo): Promise<Todo> => {
  const { data } = await apiClient.put(ENDPOINTS.TODOS.BASE, todo);
  return data;
};

export const updateTodo = async (id: string, todo: Todo): Promise<Todo> => {
  const { data } = await apiClient.put(ENDPOINTS.TODOS.BY_ID(id), todo);
  return data;
};

export const deleteTodo = async (id: string): Promise<Todo> => {
  const { data } = await apiClient.delete(ENDPOINTS.TODOS.BY_ID(id));
  return data;
};

