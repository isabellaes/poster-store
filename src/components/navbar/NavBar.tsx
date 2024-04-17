import { NavLink } from "react-router-dom";
import { Category } from "../../utils/types";

type NavBarPropsType = {
  items: Category[];
};

const NavBar = ({ items }: NavBarPropsType) => {
  return (
    <nav className="navbar">
      <ul>
        {items.map((c) => (
          <NavLink to={`category/${c.id}`}>{c.name}</NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
