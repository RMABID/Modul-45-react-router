import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="border-2 p-3 rounded-xl border-purple-600">
      <h1>{title}</h1>
      <h1>{body}</h1>
      <button
        className="p-3 rounded-xl mt-4
       border bg-purple-500 text-white"
      >
        <Link to={`/post/${id}`}>Post ID</Link>
      </button>
      <Link to={`/post/${id}`}>
        <button
          className="p-3 rounded-xl mt-4
       border bg-purple-500 text-white"
        >
          Show Details
        </button>
      </Link>
      <button className="border-2 p-3 rounded-xl" onClick={handleShowDetails}>ShowDetails</button>
    </div>
  );
};

Post.propTypes = {};

export default Post;
