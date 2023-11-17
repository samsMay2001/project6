import { faker } from "@faker-js/faker";
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
import { useEffect } from "react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { Link as RouterLink } from "react-router-dom";

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

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        background:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
      }}
      p={2}
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
            <IconButton>
              <Tooltip title="Friends" placement="bottom">
                <AddressBook />
              </Tooltip>
            </IconButton>
            <IconButton>
              <Tooltip title="Add" placement="bottom">
                <UserPlus />
              </Tooltip>
            </IconButton>
            <IconButton>
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
        {/* New conversation */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="subtitle2" component={Link}>
            Start Conversation
          </Typography>
          <IconButton
            onClick={() => {
              // setOpenDialogue to true
            }}
          >
            <Plus style={{ color: theme.palette.primary.main }} />
          </IconButton>
        </Stack>
        {/* archive box and text */}
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>

        {/* chat lists */}
        <Stack
          spacing={2}
          direction={"column"}
          sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}
        >
          {/* <SimpleBarStyle > */}

          {/* "Pinned" chat list */}
          <Stack spacing={2.4}>
            <Typography variant={"subtitle2"} sx={{ color: "#676767" }}>
              Pinned
            </Typography>
            {ChatList.filter((el) => el.pinned).map((el) => (
              <ChatElement {...el} />
            ))}
          </Stack>

          {/* "All" chat list */}
          <Stack spacing={2.4}>
            <Typography variant={"subtitle2"} sx={{ color: "#676767" }}>
              All Chats
            </Typography>
            {ChatList.filter((el) => !el.pinned).map((el) => (
              <ChatElement {...el} />
            ))}
          </Stack>
          {/* </SimpleBarStyle> */}
        </Stack>
      </Stack>
    </Box>
  );
}

export default Chats;
