import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/store";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import { useState } from "react";
import { CartItem, Product } from "../../utils/types";
import { addToCart } from "../../redux/reducer/cartSlice";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const CategoryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const params = useParams<{ categoryId: string }>();
  const products = useSelector((state: State) => state.product.products);

  const productsByCategory = products.filter(
    (p) => p.category.id === params.categoryId
  );

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = productsByCategory.slice(startIndex, endIndex);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const dispatch = useDispatch();
  const handleAddToCart = (product: Product, quantity: number) => {
    const cartItem: CartItem = {
      product: product,
      quantity: quantity,
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="category-page">
      <div className="content">
        <div className="container">
          {displayedProducts.map((p) => (
            <ProductCard product={p} addToCart={handleAddToCart} />
          ))}
        </div>
        {Math.ceil((productsByCategory.length || 0) / itemsPerPage) > 1 ? (
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil((productsByCategory.length || 0) / itemsPerPage)}
              page={currentPage}
              onChange={handleChange}
            />
          </Stack>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
