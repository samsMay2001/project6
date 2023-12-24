import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import { useSelector } from "react-redux";
import { dispatch } from "../../redux/store";
import { fetchMessages } from "../../redux/slices/app";
import { useEffect, useRef } from "react";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMessage,
  TimeLine,
} from "./MsgTypes";

function Message({ menu }) {
  const { chat_history, chatList, room_id } = useSelector((state) => state.app);
  const { _id } = useSelector((state) => state.auth);
  const scrollRef = useRef()
  const scrollToBottom = () => {
    if (scrollRef.current){
      const scrollHeight = scrollRef.current.scrollHeight; 
      const clientHeight = scrollRef.current.clientHeight; 
      const maxScrollTop = scrollHeight - clientHeight; 
      scrollRef.current.scrollTo({
        top: maxScrollTop > 0 ? maxScrollTop : 0,
        behavior: 'smooth',
      });
    }
  }
  useEffect(() => {
    if (chatList[room_id] !== undefined) {
      const to = chatList[room_id].participants.filter(
        (participant) => participant !== _id,
      );
      dispatch(fetchMessages(_id, to[0]));
    }
  }, []);
  useEffect(()=> {
    scrollToBottom(); 
  }, [chat_history])
  return (
    <Box
      ref={scrollRef}
      p={3}
      sx={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        bottom: 0,
        overflowY: "scroll",
        scrollbarWidth: "thin", // For Firefox
        scrollbarColor: "transparent transparent", // For Firefox
        paddingRight: "5px",

        // For WebKit browsers (Chrome, Safari)
        WebkitOverflowScrolling: "touch",
        "&::-webkit-scrollbar": {
          width: "0px", // Adjust as needed
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent", // Hide scrollbar thumb
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent", // Hide scrollbar track
        },
      }}
    >
      <Stack spacing={3}>
        {chat_history.map((el) => (
          <TextMessage el={el} menu={menu} />
        ))}
      </Stack>
    </Box>
  );
}

export default Message;
