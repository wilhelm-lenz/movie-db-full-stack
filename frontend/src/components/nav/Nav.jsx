import { Link } from "react-router-dom";
import "./Nav.scss";
import Star from "../svg/Star";
import Search from "../search/Search";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        MMDb
      </Link>
      <Star />
      <Search />
      <Link to="/createMovie">Add your own</Link>
    </nav>
  );
};

export default Nav;
