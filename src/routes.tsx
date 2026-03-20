import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

import AuthGuard from "./components/Auth/AuthGard";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Auth/Login";
import todoDetailsLoader from "./components/Todos/TodoDetailsLoader";
import Counter from "./components/Counter/Counter";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import React from "react";
import { todoLoader } from "./components/Todos/todosLoader";

const TodoDetails = React.lazy(() => import("./components/Todos/TodoDetails"));
const Todos = React.lazy(() => import("./components/Todos/Todos"));
const Posts = React.lazy(() => import("./components/Posts/Posts"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),

    children: [
      {
        path: "todos",
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<Loader />}>
                <Todos />
              </Suspense>
            ),
            loader: todoLoader,
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<Loader />}>
                <TodoDetails />
              </Suspense>
            ),
            loader: todoDetailsLoader,
          },
        ],
      },

      {
        path: "posts",
        element: (
          <Suspense fallback={<Loader />}>
            <Posts />
          </Suspense>
        ),
      },
      {
        path: "users",
        children: [
          {
            path: "",
            lazy: async () => {
              const module = await import("./components/Users/Users");
              return {
                Component: module.default,
              };
            },
          },
          {
            path: ":id",
            lazy: async () => {
              const module = await import("./components/Users/EditUserDetails");
              return {
                Component: module.default,
              };
            },
          },
        ],
      },
      { path: "counter", element: <Counter /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "login", element: <Login /> },
]);

export default router;
