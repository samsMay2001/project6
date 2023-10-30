import { Stack } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Switch from "@mui/material/Switch/Switch";
import useSettings from "../../hooks/useSettings";
import SideBar from "./sidebar";


const DashboardLayout = () => {

  const theme = useTheme()

  const [selected, setSelected] = useState(0)

  const { onToggleMode } = useSettings();

  return (
    <Stack direction={'row'}>
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
