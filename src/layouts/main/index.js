import { Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import logo from '../../assets/Images/logo.ico'
import { Columns } from "phosphor-react";
const MainLayout = () => {
  return (
    <>
      <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} sx={{border: '1px dashed grey', height: '100vh'}}>
        <Container sx={{ border: '1px dashed grey'}} maxWidth="sm">
          <Stack spacing={5}>
            <Stack  sx={{width: '100%'}} direction={'column'} alignItems={'center'}>
              <img style={{height:120, width: 120}} src={logo} alt="Logo"/>
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
