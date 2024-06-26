import NavBar from "../../components/navbar/NavBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Search from "../../components/search/Search";
import { Outlet, useNavigate } from "react-router-dom";
import { categorys } from "../../utils/data";
import { useSelector } from "react-redux";
import { State } from "../../redux/store";

const Root = () => {
  const cartItems = useSelector((state: State) => state.cart.items);
  const numArray: number[] = [];
  cartItems.forEach((item) => {
    numArray.push(item.quantity);
  });
  const navigate = useNavigate();

  const sum: number = numArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return (
    <div className="root-element">
      <h1 onClick={() => navigate("/")}>POSTER STORE</h1>
      <p>For all your creative needs.</p>
      <div className="row-spacebetween">
        <NavBar items={categorys} />

        <div className="row">
          <Search />
          <Badge badgeContent={sum} color="primary">
            <div onClick={() => navigate("/cart")}>
              <ShoppingCartIcon />
            </div>
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
