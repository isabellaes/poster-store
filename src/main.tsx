import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root/Root.tsx";
import "./style/main.scss";
import Index from "./components/index/Index.tsx";
import CategoryPage from "./pages/category/CategoryPage.tsx";
import ProductPage from "./pages/product/ProductPage.tsx";
import OrderPage from "./pages/order/OrderPage.tsx";
import CartPage from "./pages/cart/CartPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      { path: "category/:categoryId", element: <CategoryPage /> },
      { path: "product/:productId", element: <ProductPage /> },
      { path: "cart/:cartId", element: <CartPage /> },
      { path: "order/:orderId", element: <OrderPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
