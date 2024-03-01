import { Slide, Snackbar, Stack } from "@mui/material";
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
} from "../../redux/slices/app";
import { selectConversation, setConnection, setCurrentChat, setMessageReceivedToggle, setMessageSentToggle, setToggler } from "../../redux/slices/auth";
import Call from "../../pages/dashboard/Call";
import SideBarMobile from "./sidebar-mobile";
import { MobileChatSibar } from "./mobile-chat-sidebar";

const isAuthenticated = false;
export function TransitionDown(props){
  return <Slide {...props} direction="down"/>
}
const DashboardLayout = () => {
  const theme = useTheme();
  const { isLoggedIn, _id, currentChat, connection, room_id } = useSelector((state) => state.auth);
  const { friends, chatList, mobileState, mobileChatSidebar } = useSelector((state) => state.app);
  const {open_audio_dialog} = useSelector(state => state.audioCall)
  const [transition , setTransition] = useState(()=> TransitionDown)
  const [selected, setSelected] = useState(0);
  // const [mobileState, setMobileState] = useState(true); // to be turned to global state
  // const [mobileChatSidebar, setMobileChatSidebar] = useState(true); // to be turned to global state
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
      dispatch(setConnection(true))
      // set a state to show there's no error in the connection
      
    });
    socket.on("connect_error", () => {
      dispatch(setConnection(false))
    });
    socket.on("error", (err) => {
      // set a state for show there's an error in the connection
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
      const newRoom_index = chatList.findIndex(chat => chat.participants.includes(data.currentChat))
      if (chatList[newRoom_index] !== undefined) {
        const to = chatList[newRoom_index].participants.filter(
          (participant) => participant !== _id,
          );
          dispatch(fetchMessages(_id, to[0]));
          dispatch(getChatList(_id, data.currentChat)) 
          dispatch(selectConversation(chatList[newRoom_index]._id))   
        }
    })
    socket.on('new_message', (data)=> {
      // dispatch
      const newRoom_index = chatList.findIndex(chat => chat.participants.includes(data.currentChat))
      if (chatList[newRoom_index] !== undefined) {
        const to = chatList[newRoom_index].participants.filter(
          (participant) => participant !== _id,
          );
          dispatch(fetchMessages(_id, to[0]));
          dispatch(getChatList(_id, data.currentChat)) 
        }
    })


    return () => {
      socket.off('connect')
      socket.off("new_friend_request");
      socket.off("request_accepted");
      socket.off("request_sent");
      socket.off("request_cancelled");
      socket.off("message_sent"); 
      socket.off("new_message"); 
      socket.off('error')
      socket.off("disconnect")
    };
  }, [room_id, chatList]);
  useEffect(()=> {
    // console.log(connection)
  }, [connection])
  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
  }
  
  return (
    <Stack
      direction={"row"}
      sx={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
    >
      <Snackbar
        open={!connection}
        TransitionComponent={transition}
        message="Please check your connection..."
        key={transition ? transition.name : ''}
        sx={{ height: '100px', width: '100px'}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      />
      { 
        !mobileState && <SideBar />
      }
      {
        (mobileState && mobileChatSidebar == 1) && <MobileChatSibar/>
      }
      <Outlet />
      {open_audio_dialog && <Call/>}
    </Stack>
  );
};

export default DashboardLayout;
