// import { Cat } from "phosphor-react";
import React,
{
  // Suspense,
  // lazy
} from "react";
import Chats from "./Chat";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";

// Dynamic import 
// const Cat = lazy(()=> import('../../components/Cat'))

const GeneralApp = () => {
  const theme= useTheme(); 
  return (
    <Stack direction="row" sx={{width: '100%'}}>
      
      {/* chats list component */}
      <Chats />

      {/* conversation component */}
      <Box sx={{height: '100%', width: 'calc(100vw - 417px)', backgroundColor: theme.palette.mode === 'light'? '#f0f4fa' : theme.palette.background.default}}>
        <Conversation/>
      </Box>

    </Stack>
  );
};

export default GeneralApp;
