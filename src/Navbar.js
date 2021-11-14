import Categories from "./Categories";

const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <span className="material-icons md-36">store</span>
          <img src="" alt="" />
        </div>
        <div className="searchBar-container">
          <input type="text" placeholder="Buscar productos o categorías..." />
        </div>
      </div>
      <Categories />
    </>
  );
};

export default Navbar;
