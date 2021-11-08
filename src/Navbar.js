import Categories from "./Categories";
  
const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <span class="material-icons md-36">store</span>
          <img src="" alt="" />
        </div>
        <div className="searchBar-container">
          <input type="text" />
        </div>
      </div>
      <Categories />
    </>
  );
};

export default Navbar;
