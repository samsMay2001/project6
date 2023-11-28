// import { useTheme } from "@mui/system";
// import { Typography } from "@mui/material";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { Link as RouterLink } from "react-router-dom";
import { Box, Stack, Typography, Badge, Avatar, useTheme } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { dispatch } from "../../redux/store";
import { selectConversation } from "../../redux/slices/app";
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

const ChatElement = ({ id, name, img, msg, time, unread, online, chatId }) => {
  const theme = useTheme();
  const { room_id } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(selectConversation(0));
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        background:
          theme.palette.mode === "light"
            ? chatId !== room_id
              ? "#fff"
              : "rgb(0, 0, 0, .05)"
            : chatId !== room_id
              ? "rgb(255, 255, 255, 0.025)"
              : "rgb(255, 255, 255, 0.07)",
        cursor: "pointer",
      }}
      p={2}
      onClick={() => {
        dispatch(selectConversation(chatId));
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
      >
        {/* avatar section */}
        <Stack direction={"row"} spacing={2}>
          {online ? (
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
            <Typography variant={"subtitle2"}>{name}</Typography>
            <Typography variant={"caption"}>{msg}</Typography>
          </Stack>
        </Stack>
        {/* time section */}
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeigth: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread} />
        </Stack>
      </Stack>
    </Box>
  );
};

export function ActualChats() {
  const theme = useTheme();
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
      <Stack spacing={2.4}>
        <Typography
          variant={"subtitle2"}
          sx={{ color: theme.palette.mode === "light" ? "#676767" : "#fff" }}
        >
          All Chats
        </Typography>
        {ChatList.map((el, index) => (
          <ChatElement {...el} chatId={index} />
        ))}
      </Stack>
      {/* </SimpleBarStyle> */}
    </Stack>
  );
}
