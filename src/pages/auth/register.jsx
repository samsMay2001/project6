import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "./registerForm";
import AuthSocial from "./AuthSocial";
import { useEffect } from "react";

function Register() {
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
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Get started with Tawk</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">Already have an account? </Typography>
          <Link to={"/auth/login"} component={RouterLink} variant={"subtitle2"}>
            Sign in
          </Link>
        </Stack>
        {/* Register form  */}
        <RegisterForm />
        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 3,
            typography: "caption",
            textAlign: "center",
          }}
        >
          {"By signing up, I agree to "}
          <Link underline="always" color={"text.primary"}>
            Terms of service
          </Link>
          {" and "}
          <Link underline="always" color={"text.primary"}>
            Privacy Policy
          </Link>
        </Typography>
        <AuthSocial />
      </Stack>
    </>
  );
}

export default Register;
