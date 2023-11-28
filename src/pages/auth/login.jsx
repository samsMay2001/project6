import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "./AuthSocial";
import LoginForm from "./LoginForm";
import { useEffect, useState } from "react";

function Login() {
  const [windowReloaded, setWindowReloaded] = useState(false);
  useEffect(() => {
    // Get the reloaded value from localStorage
    const storedValue = localStorage.getItem("reloadWindow");

    // Check if storedValue is null or undefined
    if (
      storedValue === null ||
      storedValue === undefined ||
      storedValue === "false"
    ) {
      console.log(storedValue);
      window.location.reload();
      // Set the value in localStorage
      localStorage.setItem("reloadWindow", JSON.stringify(true));
    }
  }, []);
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h4">Login to Tawk</Typography>
      <Stack direction={"row"} spacing={0.5}>
        <Typography variant="body2">New User?</Typography>
        <Link
          to={"/auth/register"}
          component={RouterLink}
          variant={"subtitle2"}
        >
          Create Account
        </Link>
      </Stack>

      {/* Login Form  */}
      <LoginForm />
      {/* AuthSocial */}
      <AuthSocial />
    </Stack>
  );
}

export default Login;
