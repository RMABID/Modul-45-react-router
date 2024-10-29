import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>
      <nav className="flex justify-center gap-8  text-purple-500 font-bold">
        <NavLink to="/">Home</NavLink>
        <NavLink to={`/posts`}>Posts</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
        {/* <Link to="/users">Users</Link> */}
        <NavLink to="/about">About</NavLink>
        <NavLink to={`/contact`}>Contact</NavLink>
      </nav>
    </div>
  );
};

Header.propTypes = {};

export default Header;
