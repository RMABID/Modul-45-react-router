import PropTypes from "prop-types";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h1>Page Not Found</h1>
          <Link to={"/posts"}>
            <button>Go Back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;
