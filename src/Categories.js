import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="catContainer">
        <div className="catContent">
          <NavLink
            className="linkText"
            to="/ofertas"
          >
            Ofertas
          </NavLink>
          <NavLink
            className="linkText"
            to="/nosotros"
          >
            Sobre Nosotros
          </NavLink>
        </div>
      </div>
      <div className="menuContainer">
        <div className="menuContent"></div>
      </div>
    </>
  );
};

export default Categories;
