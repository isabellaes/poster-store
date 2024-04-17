import NavBar from "../../components/navbar/NavBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Search from "../../components/search/Search";
import { Outlet } from "react-router-dom";
import { categorys } from "../../utils/data";

const Root = () => {
  return (
    <div className="root-element">
      <h1>POSTER STORE</h1>
      <p>For all your creative needs.</p>
      <div className="row-spacebetween">
        <NavBar items={categorys} />

        <div className="row">
          <Search />
          <Badge>
            <ShoppingCartIcon />
          </Badge>
        </div>
      </div>
      <div className="header-messages">
        <p>30% off your order RIGHT NOW! </p>
      </div>

      <Outlet />
    </div>
  );
};

export default Root;
