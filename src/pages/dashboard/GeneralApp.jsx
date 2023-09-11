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
      <Box sx={{height: '100%', width: 'calc(100vw - 417px)', backgroundColor: '#fff', border: '1px dashed grey'}}>
        <Conversation/>
      </Box>

    </Stack>
  );
};

export default GeneralApp;
