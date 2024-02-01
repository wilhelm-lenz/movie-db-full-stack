import { Link } from "react-router-dom";
import "./Nav.scss";
import Star from "../svg/Star";
import Search from "../search/Search";

const Nav = () => {
  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="logo-favorits-wrapper">
          <Link to="/" className="logo">
            MMDb
          </Link>
          <Star className="star-icon" />
        </div>
        <Search className="search" />
        <Link to="/createMovie" className="nav-link">
          Add your own
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
