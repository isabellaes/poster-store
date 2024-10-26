import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink style={{}} to={`/`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={{}} to={`/products`}>
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
