import Navbar from "./Navbar";
import Link from "./Link";

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
