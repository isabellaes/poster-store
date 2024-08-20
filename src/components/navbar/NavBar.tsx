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
          <li>
            <NavLink style={{}} to={`category/${c.id}`}>
              {c.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
