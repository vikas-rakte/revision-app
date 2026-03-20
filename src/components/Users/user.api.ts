import { apiClient } from "../../api/client"
import { ENDPOINTS } from "../../api/endpoints"
import type { User } from "./user.types";


export const getUsers = async ():Promise<User[]> => {
    const { data }  =  await apiClient.get(ENDPOINTS.USERS.BASE);
   return data;
}

export const getUser = async (id: string): Promise<User> => {
  const { data } = await apiClient.get(ENDPOINTS.USERS.BY_ID(id));
  return data;
};

export const creteUser = async (user: User): Promise<User> => {
  const { data } = await apiClient.put(ENDPOINTS.USERS.BASE, user);
  return data;
};

export const updateUser = async (id: string, user: User): Promise<User> => {
  const { data } = await apiClient.put(ENDPOINTS.USERS.BY_ID(id), user);
  return data;
};

export const deleteUser = async (id: string): Promise<User> => {
  const { data } = await apiClient.delete(ENDPOINTS.USERS.BY_ID(id));
  return data;
};

