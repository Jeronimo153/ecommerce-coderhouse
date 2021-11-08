import Categories from "./Categories";
import Navbar from "./Navbar";

const Header = ({ className, imgUser }) => {
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <Navbar />
        <Categories />
      </div>
    </div>
  );
};

export default Header;
