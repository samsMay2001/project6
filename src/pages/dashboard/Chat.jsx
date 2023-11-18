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
  const [tab, setTab] = useState(0);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width: "320px",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        // border: '4px dashed blue'
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: "100%" }}>
        {/* component title and icon */}
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant={"h5"}>Chats</Typography>
          <Stack
            sx={{ width: "100%" }}
            direction={"row"}
            justifyContent={"end"}
            spacing={2}
          >
            {/* tabs */}
            {/* friends */}
            <IconButton
              sx={{
                backgroundColor:
                  tab === 0 ? "rgb(0,0,0,.06)" : "rgb(0, 0, 0, 0)",
              }}
              onClick={() => {
                setTab(0);
              }}
            >
              <Tooltip title="Friends" placement="bottom">
                <AddressBook />
              </Tooltip>
            </IconButton>
            {/* Add friends */}
            <IconButton
              onClick={() => {
                setTab(1);
              }}
              sx={{
                backgroundColor:
                  tab === 1 ? "rgb(0,0,0,.06)" : "rgb(0, 0, 0, 0)",
              }}
            >
              <Tooltip title="Add" placement="bottom">
                <UserPlus />
              </Tooltip>
            </IconButton>
            {/* Chats */}
            <IconButton
              onClick={() => {
                setTab(2);
              }}
              sx={{
                backgroundColor:
                  tab === 2 ? "rgb(0,0,0,.06)" : "rgb(0, 0, 0, 0)",
              }}
            >
              <Tooltip title="Chats" placement="bottom">
                <CircleDashed />
              </Tooltip>
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

        {/* My Friends */}
        {tab === 0 && <Friends />}
        {/* Add Friends */}
        {tab === 1 && <AddFriends />}
        {/* Chats */}
        {tab === 2 && <ActualChats />}

        {/* {false && } */}
      </Stack>
    </Box>
  );
}

export default Chats;
