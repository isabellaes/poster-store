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
import AdminPage from "./pages/admin/AdminPage.tsx";
import LoginPage from "./pages/admin/LoginPage.tsx";
import StatisticPage from "./pages/admin/StatisticsPage.tsx";
import ProducstOverviewPage from "./pages/admin/ProductsOverviewPage.tsx";

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
  {
    path: "/admin",
    element: <AdminPage />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "statistics", element: <StatisticPage /> },
      { path: "productsoverview", element: <ProducstOverviewPage /> },
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
