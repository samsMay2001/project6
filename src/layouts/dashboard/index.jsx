import { Stack } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch/Switch";
import useSettings from "../../hooks/useSettings";
import SideBar from "./sidebar";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, socket } from "../../socket";

const isAuthenticated = false;
const DashboardLayout = () => {
  const theme = useTheme();
  const {isLoggedIn, user_id} = useSelector((state) => state.auth)
  const [selected, setSelected] = useState(0); 
  const dispatch = useDispatch(); 
  const { onToggleMode } = useSettings();
  

  useEffect(()=>{
    // friend requests socket code. 
    // window.onload = () => {
    //   if (!window.location.hash){
    //     window.location = window.location + "#loaded"; 
    //     window.location.reload(); 
    //   }
    // }
    // window.reload();
    // if (!socket){
    //   connectSocket(user_id)
    // }

    // socket.on("new_friend_request", (data)=> {
    //   console.log('friend request was received')
    // })
    // socket.on("request_accepted", (data)=> {
    //   console.log('friend request was received')
    // })
    // socket.on("request_sent", (data)=> {
    //   console.log('friend request was received')
    // })

    // return () => {
    //   socket.off("new_friend_request")
    //   socket.off("request_accepted")
    //   socket.off("request_sent")
    // }

  }, [])
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
