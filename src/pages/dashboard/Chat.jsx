import {
  Box,
  Stack,
  Typography,
  InputBase,
  Button,
  Divider,
  Badge,
  Avatar,
  useTheme,
  Link,
  IconButton,
  Tooltip,
} from "@mui/material";
// import InputBase from "@mui/material/InputBase/InputBase";

import { styled, alpha } from "@mui/material/styles";
import {
  AddressBook,
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Plus,
  UserList,
  UserPlus,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { Link as RouterLink } from "react-router-dom";
import { ActualChats } from "./ActualChats";
import { Friends } from "./Friends";
import { AddFriends } from "./AddFriends";
import { useSelector } from "react-redux";
import { setChatTab } from "../../redux/slices/app";
import { dispatch } from "../../redux/store";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  // border : '1px dashed grey',
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  // height: '50px'
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  // border: '1px dashed grey',
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

function Chats() {
  const theme = useTheme();
  const { chatTab, mobileState, mobileChatSidebar } = useSelector((state) => state.app);
  // const [mobileState, setMobileState] = useState(true); // to be turned to global state
  // const [mobileChatSidebar, setMobileChatSidebar] = useState(true); // to be turned to global state
  const tab = chatTab;
  // useEffect(() => {}, []);
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width:mobileState? "100%" : "320px",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        zIndex: '300'
        // border: '4px dashed blue'
      }}
    >
      <Stack
        p={3}
        spacing={2}
        sx={{
          height: "100%",
          padding: "25px",
          paddingBottom: "0px",
        }}
      >
        {/* component title and icon */}
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant={"h5"}>
            {tab === 0 && "Friends"}
            {tab === 1 && "Explore"}
            {tab === 2 && "Chats"}
          </Typography>
          <Stack
            sx={{ width: "100%" }}
            direction={"row"}
            justifyContent={"end"}
            spacing={2}
            p={2}
          >
            {/* tabs */}
            {/* friends */}
            <IconButton
              sx={{
                backgroundColor:
                  tab === 0
                    ? theme.palette.mode === "light"
                      ? "rgb(0,0,0,.06)"
                      : "#36414E"
                    : "rgb(0, 0, 0, 0)",
                color:
                  theme.palette.mode === "light"
                    ? "#000"
                    : "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "rgb(0,0,0,.06)"
                      : "#333E4A", // Change to the desired hover color
                },
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(setChatTab(0));
              }}
            >
              <AddressBook fontSize={20} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor:
                  tab === 1
                    ? theme.palette.mode === "light"
                      ? "rgb(0,0,0,.06)"
                      : "#36414E"
                    : "rgb(0, 0, 0, 0)",
                color:
                  theme.palette.mode === "light"
                    ? "#000"
                    : "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "rgb(0,0,0,.06)"
                      : "#333E4A", // Change to the desired hover color
                },
              }}
              onClick={() => {
                dispatch(setChatTab(1));
              }}
            >
              <UserPlus fontSize={20} />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor:
                  tab === 2
                    ? theme.palette.mode === "light"
                      ? "rgb(0,0,0,.06)"
                      : "#36414E"
                    : "rgb(0, 0, 0, 0)",
                color:
                  theme.palette.mode === "light"
                    ? "#000"
                    : "rgba(255, 255, 255, 0.8)",
                "&:hover": {
                  backgroundColor:
                    theme.palette.mode === "light"
                      ? "rgb(0,0,0,.06)"
                      : "#333E4A", // Change to the desired hover color
                },
              }}
              onClick={() => {
                dispatch(setChatTab(2));
              }}
            >
              <CircleDashed fontSize={20} />
            </IconButton>
          </Stack>
        </Stack>

        {/* search bar */}
        <Stack sx={{ width: "100%" }} spacing={1}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={"Search..."}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>

        {/* archive box and text */}
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Box
          sx={{
            overflowY: "scroll",
            scrollbarWidth: "thin", // For Firefox
            scrollbarColor: "transparent transparent", // For Firefox

            // For WebKit browsers (Chrome, Safari)
            WebkitOverflowScrolling: "touch",
            "&::-webkit-scrollbar": {
              width: "5px", // Adjust as needed
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "transparent", // Hide scrollbar thumb
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent", // Hide scrollbar track
            },
          }}
        >
          {/* My Friends */}

          {tab === 0 && <Friends />}
          {/* Add Friends */}
          {tab === 1 && <AddFriends />}
          {/* Chats */}
          {tab === 2 && <ActualChats />}
          {/* {false && } */}
        </Box>
      </Stack>
    </Box>
  );
}

export default Chats;
