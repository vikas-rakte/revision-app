import { apiClient } from "../../api/client"
import { ENDPOINTS } from "../../api/endpoints"
import type { Post } from "./posts.types";


export const getPosts = async ():Promise<Post[]> => {
    const { data }  =  await apiClient.get(ENDPOINTS.POSTS.BASE);
   return data;
}

export const getPost = async (id: string): Promise<Post> => {
  const { data } = await apiClient.get(ENDPOINTS.POSTS.BY_ID(id));
  return data;
};

export const createPost = async (todo: Post): Promise<Post> => {
  const { data } = await apiClient.put(ENDPOINTS.POSTS.BASE, todo);
  return data;
};

export const updatePost = async (id: string, todo: Post): Promise<Post> => {
  const { data } = await apiClient.put(ENDPOINTS.POSTS.BY_ID(id), todo);
  return data;
};

export const deletePost = async (id: string): Promise<Post> => {
  const { data } = await apiClient.delete(ENDPOINTS.POSTS.BY_ID(id));
  return data;
};

