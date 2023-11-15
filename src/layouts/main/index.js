import { Container, Stack } from "@mui/material";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import logo from "../../assets/Images/logo.ico";
import { Columns } from "phosphor-react";

const isAuthenticated = false;
const MainLayout = () => {
  if (isAuthenticated) {
    return <Navigate to={"/app"} />;
  }
  return (
    <>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100vh" }}
      >
        <Container maxWidth="sm">
          <Stack spacing={5}>
            <Stack
              sx={{ width: "100%" }}
              direction={"column"}
              alignItems={"center"}
            >
              <img style={{ height: 120, width: 120 }} src={logo} alt="Logo" />
            </Stack>
          </Stack>
          <div></div>
          <Outlet />
        </Container>
      </Stack>
    </>
  );
};

export default MainLayout;
