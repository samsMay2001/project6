// import { Cat } from "phosphor-react";
import React,
{
  // Suspense,
  // lazy
} from "react";
import Chats from "./Chat";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";

// Dynamic import 
// const Cat = lazy(()=> import('../../components/Cat'))

const GeneralApp = () => {

  return (
    <Stack direction="row" sx={{width: '100%'}}>
      
      {/* chats list component */}
      <Chats />

      {/* conversation component */}
      <Box sx={{height: '100%', width: 'calc(100vh-420px)', backgroundColor: '#fff'}}>
        <Conversation/>
      </Box>

    </Stack>
  );
};

export default GeneralApp;
