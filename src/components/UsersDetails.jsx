import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";

const UsersDetails = () => {
  const user = useLoaderData();
  const { name, website,company } = user;
  return (
    <div className="text-3xl mt-6">
      <h1 className="text-4xl">UsersDetails : {name}</h1>
      <h1> Website : {website}</h1>
      <h1>Company : {company.name}</h1>
      <h1>Company CatchPhrase: {company.catchPhrase}</h1>
    </div>
  );
};

UsersDetails.propTypes = {};

export default UsersDetails;
