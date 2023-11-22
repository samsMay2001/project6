import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  FetchFriends,
  FetchRequests,
  FetchUsers,
} from "../../redux/slices/app";
import { dispatch } from "../../redux/store";
import {
  Avatar,
  Divider,
  Box,
  Button,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { StyledBadge } from "./ActualChats";
import { socket } from "../../socket";
import { styled } from "@mui/system";

export function AddFriends() {
  const { friends, users } = useSelector((state) => state.app);
  const { _id } = useSelector((state) => state.auth);
  const [tab, setTab] = useState(0);
  const theme = useTheme();
  function handleChange(event, value) {
    setTab(value);
  }
  useEffect(() => {
    dispatch(FetchUsers(friends, _id));
  }, []);
  return (
    <div>
      <Stack sx={{ width: "100%" }} direction={"row"} spacing={2}>
        <Button
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
                theme.palette.mode === "light" ? "rgb(0,0,0,.06)" : "#333E4A", // Change to the desired hover color
            },
          }}
          onClick={() => {
            setTab(0);
          }}
        >
          Explore
        </Button>
        <Button
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
                theme.palette.mode === "light" ? "rgb(0,0,0,.06)" : "#333E4A", // Change to the desired hover color
            },
          }}
          onClick={() => {
            setTab(1);
          }}
        >
          Requests
        </Button>
      </Stack>
      <Stack style={{ paddingTop: "10px" }}>
        {users &&
          tab === 0 &&
          users.map((item, index) => (
            <User
              index={index}
              online="true"
              name={`${item.firstname} ${item.lastname}`}
              img={""}
              user_id={item._id}
            />
          ))}
        {tab === 1 && <FriendRequests />}
      </Stack>
    </div>
  );
}

export function FriendRequests() {
  const { requests } = useSelector((state) => state.app);
  const { _id } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(FetchRequests(_id));
  }, []);
  return <div>Friend Requests</div>;
}

export function User({ index, online, name, img, user_id }) {
  const theme = useTheme();
  const { _id } = useSelector((state) => state.auth);
  return (
    <>
      <StyledChatBox
        sx={{
          width: "100%",
          // borderRadius: 1,
          // backgroundColor: theme.palette.background.paper,
          // border: "1px dashed #212B36",
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} alignItems="center" spacing={2}>
            {""}
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar alt={name} src={img} />
              </StyledBadge>
            ) : (
              <Avatar alt={name} src={img} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Button
              onClick={() => {
                socket.emit(
                  "friend_request",
                  { to: _id, from: user_id },
                  () => {
                    alert("request sent");
                  },
                );
              }}
            >
              Add +
            </Button>
          </Stack>
        </Stack>
      </StyledChatBox>
      <Divider />
    </>
  );
}

const StyledChatBox = styled(Box)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
  },
}));
