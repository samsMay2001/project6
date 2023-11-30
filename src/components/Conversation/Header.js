import {
  Avatar,
  Box,
  Divider,
  IconButton,
  InputAdornment,
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
import { ToggleSidebar } from "../../redux/slices/app";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function ConvoHeader() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { chatList, room_id } = useSelector((state) => state.app);
  const { firstname } = useSelector((state) => state.auth);
  useEffect(() => {}, []);
  return (
    <Box
      p={2}
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
            dispatch(ToggleSidebar()); // there's a problem here because togglesidebar doesn't appear to be calling !!!!!!!!!
          }}
          direction={"row"}
          alignItems="center"
          spacing={2}
        >
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
              {chatList[room_id] !== undefined &&
                chatList[room_id].names.map(
                  (name, index) => name !== firstname && name,
                )}
            </Typography>
            <Typography variant={"caption"}>{"online"}</Typography>
          </Stack>
        </Stack>

        {/* right section, which has icons  */}
        <Stack direction="row" alignItems="center" spacing={3}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ConvoHeader;
