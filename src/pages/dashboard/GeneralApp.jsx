// import { Cat } from "phosphor-react";
import React,
{
  // Suspense,
  // lazy
} from "react";
import Chats from "./Chat";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contacts";
import { useSelector } from "react-redux";

// Dynamic import 
// const Cat = lazy(()=> import('../../components/Cat'))

const GeneralApp = () => {
  const theme= useTheme();
  const {sidebar} = useSelector((store) => store.app); 
  return (
    <Stack direction="row" sx={{width: '100%', position: 'relative'}}>
      
      {/* chats list component */}
      <Chats />

      {/* conversation component */}
      <Box sx={
        {
          position: 'absolute',
          height: '100%', 
          top: 0,
          left: '320px',
          bottom: 0, 
          right: sidebar.open ? '300px' : '0', 
          backgroundColor: theme.palette.mode === 'light'? '#f0f4fa' : theme.palette.background.default, 
          // border: '1px dashed grey'
        }
          }>
        <Conversation/>
      </Box>

      {/* contacts */}
      {(sidebar.open && <Contact/>)}
      {/* <Contact/> */}
    </Stack>
  );
};

export default GeneralApp;
