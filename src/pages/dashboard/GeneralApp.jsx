// import { Cat } from "phosphor-react";
import { useEffect, useState } from "react"; // lazy // Suspense,
import Chats from "./Chat";
import { Box, Stack, useTheme, Typography } from "@mui/material";
import Conversation from "../../components/Conversation/Conversation";
import Contact from "../../components/Contacts";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";
import { dispatch } from "../../redux/store";
import { getChatList } from "../../redux/slices/app";

// Dynamic import
// const Cat = lazy(()=> import('../../components/Cat'))

const GeneralApp = () => {
  const theme = useTheme();
  const { _id, currentChat } = useSelector((store) => store.auth);
  const { sidebar, chatList, mobileState, mobileChatSidebar } = useSelector((store) => store.app);
  // const [mobileState, setMobileState] = useState(true); // to be turned to global state
  // const [mobileChatSidebar, setMobileChatSidebar] = useState(true); // to be turned to global state
  useEffect(() => {
    dispatch(getChatList(_id, currentChat));
  }, []);
  return (
    <Stack direction="row" sx={{ width: "100%", position: "relative" }}>
      {/* chats list component */}
      {
        !mobileState && <Chats/>
      }
      {/* <Chats /> */}

      {/* conversation component */}
      
  { !mobileChatSidebar &&    <Box
        sx={{
          position: "absolute",
          height: "100%",
          top: 0,
          left: mobileState ? "0px": "320px",
          bottom: 0,
          right: sidebar.open ? "320px" : "0",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f0f4fa"
              : theme.palette.background.default,
          // border: '1px dashed grey'
        }}
      >
        {chatList[0] === undefined && (
          <Stack
            sx={{ height: "100%" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h4">Welcome to Tawk</Typography>
            <Typography variant="body2">New Chat?</Typography>
          </Stack>
        )}
        {chatList[0] !== undefined && <Conversation />}
      </Box> }

      {/* contacts */}
      {/* {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;

            case "STARRED":
              return <StarredMessages />;

            case "SHARED":
              return <SharedMessages />;

            default:
              break;
          }
        })()} */}
      {/* <Contact/> */}
    </Stack>
  );
};

export default GeneralApp;
