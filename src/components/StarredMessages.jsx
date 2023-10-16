import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";
import { CaretLeft } from "phosphor-react";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { SHARED_DOCUMENTS, SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";
import Message from "./Conversation/messages";

function StarredMessages() {
    const theme = useTheme(); 
    const dispatch = useDispatch(); 
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return ( 
        <Box sx={
            {
                // width: 323,
                position: 'absolute',
                width: '320px',
                height: '100vh', 
                top: 0,  
                right: 0, 
                // border: '1px dashed grey'
            }}>
                <Stack sx={{height: '100vh'}}>
                    {/* Header */}
                    <Box sx={{
                        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', 
                        width: "100%", 
                        background: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background, 
                        // border: '1px dashed grey'
                    }}>
                        <Stack sx={{height: '100%'}} p={2} direction={'row'} alignItems={'center'} spacing={3}>
                            <IconButton onClick={()=>{
                                dispatch(UpdateSidebarType("CONTACT"))
                            }}>
                                <CaretLeft />
                            </IconButton>
                            <Typography variant="subtitle2">Starred Messages</Typography>
                        </Stack>
                    </Box>
                    {/* Body */}
                    <Stack sx={{height: '100%', position: 'relative', flexGrow: 1}} p={3} spacing={3}>
                       <Message menu={false} />
                    </Stack>
                </Stack>
        </Box>
     );
}

export default StarredMessages;