import { Product } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
interface props {
  product: Product;
  addToCart: (product: Product, quantity: number) => void;
}

export default function ProductCard(props: props) {
  const [quantity, setQuantity] = useState<number>(1);
  const navigate = useNavigate();
  return (
    <div className="card">
      <img
        src={props.product.img}
        alt="product-img"
        onClick={() => navigate(`/product/${props.product.id}`)}
      />

      <div className="product-info">
        <h3>{props.product.name}</h3>
        <p>${props.product.price.toFixed(2)}</p>
      </div>

      <div className="add-to-cart-container">
        <input
          type="number"
          value={quantity}
          min="1"
          className="input-number"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button
          className="add-button"
          onClick={() => props.addToCart(props.product, quantity)}
        >
          <AddShoppingCartIcon></AddShoppingCartIcon>
        </button>
      </div>
    </div>
  );
}
