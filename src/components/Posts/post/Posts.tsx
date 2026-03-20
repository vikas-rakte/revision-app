import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../../store";
import { useEffect } from "react";
import type { Post } from "../posts.types";
import { fetchPosts } from "../posts-slice/posts.slice";

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status } = useSelector((state: RootState) => state.Posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === "loading") {
    return <h1> Loading...</h1>;
  }

  if (status === "rejected") {
    return <h1> Error while fetching</h1>;
  }

  return (
    <>
      <h1>Users List</h1>

      <hr />
      <div>
        <ul>
          {data.map((post: Post) => {
            return <li key={post.id}> {post.title} </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Posts;
