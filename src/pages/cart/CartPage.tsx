import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/reducer/cartSlice";
import { State } from "../../redux/store";
import { CartItem } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { createOrder } from "../../redux/reducer/orderSlice";

const CartPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: State) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId: string) => {
    dispatch(increaseQuantity({ productId }));
  };

  const handleDecreaseQuantity = (productId: string) => {
    dispatch(decreaseQuantity({ productId }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  function calculateTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity;
    }, 0);
  }
  const totalCost = calculateTotal(cartItems);
  return (
    <div className="container-shoppingcart">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit">
          Cart
        </Link>
      </Breadcrumbs>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
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

                <div className="update-cartitem-btn">
                  <button
                    onClick={() => handleDecreaseQuantity(item.product.id)}
                  >
                    <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                  </button>
                  <p className="item-quantity"> {item.quantity}</p>
                  <button
                    onClick={() => handleIncreaseQuantity(item.product.id)}
                  >
                    <AddCircleOutlineIcon></AddCircleOutlineIcon>
                  </button>
                </div>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemoveFromCart(item.product.id)}
              >
                <DeleteForeverIcon></DeleteForeverIcon>
              </button>
            </div>
          ))}

          <h3 className="total-cost">Total: ${totalCost.toFixed(2)}</h3>
          <div className="cart-btns">
            <button className="btn-cart" onClick={handleClearCart}>
              Clear Cart
            </button>
            <button
              className="btn-cart"
              onClick={() => {
                dispatch(
                  createOrder({
                    id: 1,
                    date: new Date(),
                    cartItems: cartItems,
                    name: "Hello",
                  })
                );
                setTimeout(() => {
                  handleClearCart(), navigate("/order/1");
                }, 1000);
              }}
            >
              Go to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
