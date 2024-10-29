import PropTypes from "prop-types";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div className="p-4">
      <h1 className="text-4xl text-center">This is Home Components</h1>
      <div className="text-center mt-3">
        <Header></Header>
        {navigation.state === "loading" ? (
          <p className="text-6xl font-bold">Loading ...</p>
        ) : (
          <Outlet></Outlet>
        )}

        <div className="mt-32">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
