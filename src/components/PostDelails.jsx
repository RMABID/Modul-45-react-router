import PropTypes from "prop-types";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDelails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const { id, title } = post;
  const handleGOBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1 className="text-3xl mt-4"> Post Details ID : {id}</h1>
      <h1 className="text-3xl mt-4"> Post Details : {title}</h1>
      <button onClick={handleGOBack}>Go Back</button>
    </div>
  );
};

PostDelails.propTypes = {};

export default PostDelails;
