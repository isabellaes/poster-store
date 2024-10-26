import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>Admin Page</h1>
        <nav>
          <NavLink to="/admin">Log in</NavLink>
          <NavLink to="/admin/productsoverview">products</NavLink>
          <NavLink to="/admin/statistics">statistics</NavLink>
        </nav>
      </header>
      <div className="outlet">
        <Outlet />
      </div>
      <footer className="admin-footer">
        <p>Admin page for poster-store</p>
      </footer>
    </div>
  );
};

export default AdminPage;
