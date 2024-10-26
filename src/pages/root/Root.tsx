import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Outlet, useNavigate } from "react-router-dom";
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
        <NavBar />

        <div className="row">
          {/* <Search /> */}
          <Badge badgeContent={sum} color="primary">
            <div onClick={() => navigate("/cart")}>
              <ShoppingCartIcon />
            </div>
          </Badge>
        </div>
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
