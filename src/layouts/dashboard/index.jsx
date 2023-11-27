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
import { FetchRequests, FetchUsers } from "../../redux/slices/app";

const isAuthenticated = false;
const DashboardLayout = () => {
  const theme = useTheme();
  const { isLoggedIn, _id } = useSelector((state) => state.auth);
  const { friends } = useSelector((state) => state.app);
  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();
  const { onToggleMode } = useSettings();

  useEffect(() => {
    // friend requests socket code.
    window.onload = () => {
      if (!window.location.hash) {
        window.location = window.location + "#loaded";
        window.location.reload();
      }
    };
    if (!socket) {
      connectSocket(_id);
    }
    if (socket) {
      socket.connect();
    }
    socket.on("connect", (data) => {
      console.log("socket connected");
    });
    socket.on("error", (err) => {
      console.log(err);
    });
    socket.on("new_friend_request", (data) => {
      dispatch(FetchRequests(_id));
    });
    socket.on("request_accepted", (data) => {
      console.log("friend request was accepted");
    });

    socket.on("request_sent", (data) => {
      dispatch(FetchUsers(friends, _id));
    });
    socket.on("request_cancelled", (data) => {
      dispatch(FetchUsers(friends, _id));
      dispatch(FetchRequests(_id)); 
    });

    return () => {
      socket.off("new_friend_request");
      socket.off("request_accepted");
      socket.off("request_sent");
    };
  }, []);
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
