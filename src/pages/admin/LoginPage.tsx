import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="login-admin">
      <h2>Log in to admin poster store</h2>

      <form onSubmit={() => navigate("productsoverview")}>
        <TextField label="Username" />
        <TextField type="password" label="Password" />
        <Button variant="contained" color="secondary" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
