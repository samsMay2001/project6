// import { useTheme } from "@mui/system";
// import { Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
// import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { Link as RouterLink } from "react-router-dom";
import { Box, Stack, Typography, Badge, Avatar, useTheme } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { dispatch } from "../../redux/store";
import { fetchMessages, getChatList, setMobileChatSidebar } from "../../redux/slices/app";
import { selectConversation, setMessageReceivedToggle, setMessageSentToggle } from "../../redux/slices/auth";
// import {ChatEle}
export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElement = ({ id, names, img, msg, time, unread, online, chatId, item, room_id1 }) => {
  const theme = useTheme();
  const { chatList, mobileState } = useSelector((state) => state.app);
  const { firstname, _id, currentChat, room_id } = useSelector((state) => state.auth);
  useEffect(() => {    
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        background:
          theme.palette.mode === "light"
            ? item._id !== room_id
              ? "#fff"
              : "rgb(0, 0, 0, .05)"
            : item._id !== room_id
              ? "rgb(255, 255, 255, 0.025)"
              : "rgb(255, 255, 255, 0.07)",
        cursor: "pointer",
      }}
      p={2}
      onClick={() => {
        dispatch(selectConversation(item._id));
        if (mobileState) { // this functionality only happens in mobileState
          dispatch(setMobileChatSidebar(0)); 
        } 
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
      >
        {/* avatar section */}
        <Stack direction={"row"} spacing={2}>
          {true ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
          {/* text section */}
          <Stack spacing={0.3}>
            <Typography variant={"subtitle2"}>
              {names!== undefined && names.map((name, index) => name !== firstname && name)}
            </Typography>
            <Typography variant={"caption"}>
              {msg !== undefined && msg.length > 1 ? msg : "No messages"}
            </Typography>
          </Stack>
        </Stack>
        {/* time section */}
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeigth: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={true} />
        </Stack>
      </Stack>
    </Box>
  );
};

export function ActualChats() {
  const theme = useTheme();
  const { chatList, requests } = useSelector((state) => state.app); // gets the new chat list
  const { _id, room_id, currentChat} = useSelector((state) => state.auth); // gets the new chat list
  // const roomIndex = chatList.findIndex(chat => chat._id === room_id)
  
  useEffect(()=> {
    if (room_id === 0){
      const room_id1 = chatList.filter(chat => chat.participants.includes(currentChat))
      if (room_id1[0] !== undefined){
        dispatch(selectConversation(room_id1[0]._id))
      }
    } else {
      // console.log('room_id was already set')
    }
  }, [room_id, chatList])
  return (
    <Stack
      spacing={2}
      direction={"column"}
      sx={{
        flexGrow: 1,
        overflowY: "scroll",
        height: "100%",
        scrollbarWidth: "thin", // For Firefox
        scrollbarColor: "transparent transparent", // For Firefox

        // For WebKit browsers (Chrome, Safari)
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          width: "12px", // Adjust as needed
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent", // Hide scrollbar thumb
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent", // Hide scrollbar track
        },
      }}
    >
      {/* <SimpleBarStyle > */}

      {/* "Pinned" chat list */}
      {/* <Stack spacing={2.4}>
        <Typography variant={"subtitle2"} sx={{ color: "#676767" }}>
          Pinned
        </Typography>
        {ChatList.filter((el) => el.pinned).map((el, index) => (
          <ChatElement {...el} chatId={index} />
        ))}
      </Stack> */}

      {/* "All" chat list */}
      <Stack spacing={2.4} sx={{ paddingBottom: "15px" }}>
        <Typography
          variant={"subtitle2"}
          sx={{ color: theme.palette.mode === "light" ? "#676767" : "#fff" }}
        >
          All Chats
        </Typography>
        {chatList.map((el, index) => (
          <ChatElement {...el} chatId={index} item={el}/>
        ))}
        {/* {chatList.length < 1 && "No Chats"} */}
      </Stack>
      {/* </SimpleBarStyle> */}
    </Stack>
  );
}
