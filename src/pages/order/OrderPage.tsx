import { useSelector } from "react-redux";
import { State } from "../../redux/store";
import { CartItem } from "../../utils/types";
import { Breadcrumbs, Link } from "@mui/material";

const OrderPage = () => {
  const order = useSelector((state: State) => state.order);

  function calculateTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
  }

  let totalCost;
  if (order.order) {
    totalCost = calculateTotal(order.order.cartItems);
  }
  return (
    <div className="order-page">
      <div className="container-orderConfirmation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit">
            Order
          </Link>
        </Breadcrumbs>

        <h1>Thank you for your order!</h1>
        {/*    <h4>Products</h4>
        <div>
          {order.order?.cartItems.map((item) => (
            <div className="cart-item">
              <div className="left">
                <img src={item.product.img} alt="" />
              </div>
              <div className="rigth">
                <div className="product">
                  <h3>{item.product.name}</h3>
                  <p>Price: ${item.product.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2>Total: ${totalCost?.toFixed(2)}</h2> */}
        <p>
          If you have any questions please contact us at
          <span> info@posterstore.se</span>
        </p>
        <h2>
          You will recieve your order in 1-3 days. <br />
          Welcome back!
        </h2>
      </div>
    </div>
  );
};

export default OrderPage;
