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
import {
  FetchRequests,
  FetchUsers,
  FetchFriends,
  fetchMessages,
  getChatList,
  selectConversation,
} from "../../redux/slices/app";
import { setCurrentChat, setMessageSentToggle } from "../../redux/slices/auth";

const isAuthenticated = false;
const DashboardLayout = () => {
  const theme = useTheme();
  const { isLoggedIn, _id, currentChat } = useSelector((state) => state.auth);
  const { friends, chatList, room_id } = useSelector((state) => state.app);
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
      dispatch(FetchUsers(friends, _id));
      dispatch(FetchRequests(_id));
      dispatch(FetchFriends(_id));
    });
    socket.on("error", (err) => {
      console.log(err);
    });
    socket.on("new_friend_request", (data) => {
      dispatch(FetchRequests(_id));
    });
    socket.on("request_accepted", (data) => {
      dispatch(FetchUsers(friends, _id));
      dispatch(FetchRequests(_id));
      dispatch(FetchFriends(_id));
    });

    socket.on("request_sent", (data) => {
      dispatch(FetchUsers(friends, _id));
    });
    socket.on("request_cancelled", (data) => {
      dispatch(FetchUsers(friends, _id));
      dispatch(FetchRequests(_id));
    });
    socket.on('message_sent', (data)=> {
      const to = chatList[room_id].participants.filter(participant => participant !== _id)
      dispatch(setCurrentChat(to[0]))
      dispatch(setMessageSentToggle())
      
    })
    socket.on('new_message', (data)=> {
      getMessages(chatList, dispatch, fetchMessages, room_id, _id)
    })


    return () => {
      socket.off('connect')
      socket.off("new_friend_request");
      socket.off("request_accepted");
      socket.off("request_sent");
      socket.off("request_cancelled");
      socket.off("message_sent"); 
      socket.off("new_message"); 
    };
  }, [room_id, chatList]);
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

function getMessages(chatList, dispatch, fetchMessages, room_id, _id){
  if (chatList[room_id] !== undefined) {
    const to = chatList[room_id].participants.filter(
      (participant) => participant !== _id,
    );
    dispatch(fetchMessages(_id, to[0]));
  }
}