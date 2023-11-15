import { Stack } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import Switch from "@mui/material/Switch/Switch";
import useSettings from "../../hooks/useSettings";
import SideBar from "./sidebar";
import { useSelector } from "react-redux";

const isAuthenticated = false;
const DashboardLayout = () => {
  const theme = useTheme();
  const {isLoggedIn} = useSelector((state) => state.auth)
  const [selected, setSelected] = useState(0);

  const { onToggleMode } = useSettings();
  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
  }

  return (
    <Stack
      direction={"row"}
      sx={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
    >
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
