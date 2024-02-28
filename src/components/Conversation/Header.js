import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { StyledBadge } from "../../pages/dashboard/ActualChats";
import { faker } from "@faker-js/faker";
import {
  CaretDown,
  CaretLeft,
  LinkSimple,
  MagnifyingGlass,
  PaperPlane,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";
// import { dispatch } from "../../redux/store";
// import {ToggleSidebar}  from "../../redux/slices/app";
import { useDispatch } from "react-redux";
import { ToggleSidebar, setMobileChatSidebar } from "../../redux/slices/app";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { TransitionDown } from "../../layouts/dashboard";
import Call from "../../pages/dashboard/Call";
import { PushToAudioCallQueue, StartAudioCall } from "../../redux/slices/audioCall";

function ConvoHeader() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { chatList } = useSelector((state) => state.app);
  const { firstname, room_id, _id } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(true)
  const [transition , setTransition] = useState(()=> TransitionDown)
  const roomIndex = chatList.findIndex(chat => chat._id === room_id)
  const [mobileState, setMobileState] = useState(false)

  useEffect(() => {
    // console.log(roomIndex)
  }, []);
  return (
    <Box
      p={1}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#f8faff"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        zIndex: "100",
      }}
    >
      
      <Stack
        direction={"row"}
        spacing={2}
        height={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {/* left corner items */}

        <Stack
          onClick={() => {
            // dispatch(ToggleSidebar());
          }}
          direction={"row"}
          alignItems="center"
          spacing={1}
        >
          {/* carret to show sidebar and chats */}
          <Box>
            <Stack sx={{cursor: 'pointer'}} onClick={() => {dispatch(setMobileChatSidebar(1))}}>
              <CaretLeft/>
            </Stack>
            {/* <IconButton>
            </IconButton> */}
          </Box>
          {/* Avatar and text section */}
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          </Box>
          <Stack spacing={0.3}>
            <Typography variant={"subtitle2"}>
              {chatList[roomIndex] !== undefined &&
                chatList[roomIndex].names.map(
                  (name, index) => name !== firstname && name,
                )}
            </Typography>
            <Typography variant={"caption"}>{"online"}</Typography>
          </Stack>
        </Stack>

        {/* right section, which has icons  */}
        <Stack direction="row" alignItems="center" spacing={3}>
          {/* <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton onClick={()=> {
            const roomIndex = chatList.findIndex(chat => chat._id === room_id)
            const to = chatList[roomIndex].participants.filter(participant => participant !== _id)
            dispatch(StartAudioCall(_id, to[0]))
          }}>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton> */}
          {/* <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton> */}
        </Stack>
      </Stack>

    </Box>
  );
}

export default ConvoHeader;
