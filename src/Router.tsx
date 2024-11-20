import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root/Root.tsx";
import "./style/main.scss";
import Index from "./components/index/Index.tsx";
import ProductsPage from "./pages/products/productsPage.tsx";
import ProductPage from "./pages/product/ProductPage.tsx";
import OrderPage from "./pages/order/OrderPage.tsx";
import CartPage from "./pages/cart/CartPage.tsx";
import AdminPage from "./pages/admin/AdminPage.tsx";
import LoginPage from "./pages/admin/LoginPage.tsx";
import StatisticPage from "./pages/admin/StatisticsPage.tsx";
import ProducstOverviewPage from "./pages/admin/ProductsOverviewPage.tsx";
import { useSelector } from "react-redux";
import { State } from "./redux/store.ts";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const user = useSelector((state: State) => state.auth.token);
  return user ? children : <LoginPage />;
};

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
      {
        index: true,
        element: (
          <ProtectedRoute>
            <ProducstOverviewPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "statistics",
        element: (
          <ProtectedRoute>
            <StatisticPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
