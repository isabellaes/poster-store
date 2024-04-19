import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux/store";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import { useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import { CartItem, Product } from "../../utils/types";
import { addToCart } from "../../redux/reducer/cartSlice";

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
          <Pagination
            count={Math.ceil((productsByCategory.length || 0) / itemsPerPage)}
            onChange={setCurrentPage}
            currentPage={currentPage}
            variant={"rounded"}
            color={"secondary"}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
