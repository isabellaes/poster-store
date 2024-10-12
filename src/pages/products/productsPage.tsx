import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/store";
import ProductCard from "../../components/productCard/ProductCard";
import { ChangeEvent, useState } from "react";
import { CartItem, Product } from "../../utils/types";
import { addToCart } from "../../redux/reducer/cartSlice";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector((state: State) => state.product.products);

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  const handleChange = (value: number) => {
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
    <div className="products-page">
      <div className="content">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit">
            Products
          </Link>
        </Breadcrumbs>
        <div className="container">
          {displayedProducts.map((p) => (
            <ProductCard product={p} addToCart={handleAddToCart} />
          ))}
        </div>
        {Math.ceil((products.length || 0) / itemsPerPage) > 1 ? (
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil((products.length || 0) / itemsPerPage)}
              page={currentPage}
              onChange={(_event: ChangeEvent<unknown>, page: number) =>
                handleChange(page)
              }
            />
          </Stack>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
