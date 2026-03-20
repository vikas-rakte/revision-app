type Id = string | number;
export const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const ENDPOINTS = {
  USERS: {
    BASE: "/users",
    BY_ID: (id: Id) => `/users/${id}`,
  },

  POSTS: {
    BASE: "/posts",
    BY_ID: (id: Id) => `/posts/${id}`,
  },

  TODOS: {
    BASE: "/todos",
    BY_ID: (id: Id) => `/todos/${id}`,
  },
};