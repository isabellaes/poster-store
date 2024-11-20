import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../redux/store";
import { getUserToken } from "../../redux/reducer/adminAuthSlice";
import { useState } from "react";
import { User } from "../../utils/types";

const LoginPage = () => {
  const [formData, setFormData] = useState<User>({
    username: "",
    password: "",
  });
  const dispatch = useDispatch<Dispatch>();

  function logInUser() {
    dispatch(getUserToken({ ...formData }));
  }

  return (
    <div className="login-admin">
      <h2>Log in to admin poster store</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          logInUser();
        }}
      >
        <TextField
          label="Username"
          onChange={(e) =>
            setFormData({ ...formData, username: e.currentTarget.value })
          }
        />
        <TextField
          type="password"
          label="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.currentTarget.value })
          }
        />
        <Button variant="contained" color="secondary" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
