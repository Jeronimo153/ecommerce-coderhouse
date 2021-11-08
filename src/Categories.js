import Link from "./Link";

const Categories = () => {
  return (
    <>
      <div className="catContainer">
        <div className="catContent">
          <Link
            className="linkText"
            to="https://developers.google.com/fonts/docs/material_icons"
            text="Material"
          />
          <Link
            className="linkText"
            to="https://developers.google.com/fonts/docs/material_icons"
            text="Material"
          />
          <Link
            className="linkText"
            to="https://developers.google.com/fonts/docs/material_icons"
            text="Material"
          />
          <Link
            className="linkText"
            to="https://developers.google.com/fonts/docs/material_icons"
            text={<span class="material-icons">shopping_cart</span>}
          />
        </div>
      </div>
    </>
  );
};

export default Categories;
