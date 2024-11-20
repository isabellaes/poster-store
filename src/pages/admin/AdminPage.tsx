import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Dispatch, State } from "../../redux/store";
import { logOutUser } from "../../redux/reducer/adminAuthSlice";
import { useSelector } from "react-redux";

const AdminPage = () => {
  const dispatch = useDispatch<Dispatch>();
  const user = useSelector((state: State) => state.auth.token);
  function logOut() {
    dispatch(logOutUser());
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>Admin Page</h1>
        {user ? (
          <>
            <nav>
              <NavLink to="/admin">products</NavLink>
              <NavLink to="/admin/statistics">statistics</NavLink>
            </nav>
            <button onClick={() => logOut()}>Log out</button>
          </>
        ) : (
          <></>
        )}
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
