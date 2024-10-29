import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <div className="border-green-500 border-2 rounded-xl  py-4 p-3">
      <h1 className="text-xl font-bold">Name : {name}</h1>
      <h3>Email : {email}</h3>
      <h3>Phone : {phone}</h3>
      <button className="border-2 p-2 rounded-xl bg-purple-600 text-white mt-3">
        <Link to={`/user/${id}`}>Show Details</Link>
      </button>
      <Link to={`/user/${id}`}>
        <button className="border-2 p-2 rounded-xl bg-purple-600 text-white mt-3">
          Click me
        </button>
      </Link>
    </div>
  );
};

User.propTypes = {};

export default User;
