import Navbar from "./Navbar";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <div className="headerContent">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
