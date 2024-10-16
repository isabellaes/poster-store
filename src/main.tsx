import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root/Root.tsx";
import "./style/main.scss";
import Index from "./components/index/Index.tsx";
import ProductsPage from "./pages/products/productsPage.tsx";
import ProductPage from "./pages/product/ProductPage.tsx";
import OrderPage from "./pages/order/OrderPage.tsx";
import CartPage from "./pages/cart/CartPage.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      { path: "products", element: <ProductsPage /> },
      { path: "product/:productId", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "order/:Id", element: <OrderPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
