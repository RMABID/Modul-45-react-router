import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1>Post : {posts.length}</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

Posts.propTypes = {};

export default Posts;
