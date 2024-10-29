
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2 className="text-3xl font-bold mt-5">
        Our Users : <span className="font-normal">{users.length}</span>
      </h2>
      <div className="grid grid-cols-3 gap-8 ">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

Users.propTypes = {};

export default Users;
