import { Avatar, Box, Divider, Fab, IconButton, InputAdornment, Stack, TextField, Tooltip, Typography, useTheme } from "@mui/material";
import {styled} from '@mui/material/styles'
import { StyledBadge } from "../../pages/dashboard/Chat";
import { faker } from "@faker-js/faker";
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlane, PaperPlaneTilt, Phone, Smiley, VideoCamera } from "phosphor-react";
import ConvoHeader from "./Header";
import Picker  from "@emoji-mart/react";
import data from "@emoji-mart/data"
import { useState } from "react";
import { Actions } from "./footerActions";
import { socket } from "../../socket";
import { useSelector } from "react-redux";
import { setCurrentChat, setOldChat } from "../../redux/slices/auth";
import { dispatch } from "../../redux/store";
import { useEffect } from "react";

const StyledInput = styled(TextField)(({ theme }) => (
    {
        // color: "inherit",
        "& .MuiInputBase-input": {
            paddingTop: '12px !important',
            paddingBottom: '12px !important',
        },

        "& input": {
            autocomplete: 'off', // Add this line to disable autocomplete
          },
    }
))

const ChatInput = ({setOpenPicker, message, handleMessage, handleClick}) => {

    const [openActions, setOpenAction] = useState(false); 
    return (
        <StyledInput fullWidth placeholder='Write a message' value={message} onKeyDown={(e)=> {
            if (e.key === 'Enter') {
                // Handle the "Enter" key press
                handleClick();
              }
        }} onChange={handleMessage} variant='filled' InputProps={{
            disableUnderline: true, 
            startAdornment: (
                <div></div>
                // <Stack sx={{width: 'max-content'}}>
                //     <Stack sx={{
                //         position: 'relative', 
                //         display: openActions ? 'inline-block' : 'none'
                //         }}>
                //         {Actions.map((el)=> (
                //             <Tooltip title={el.title} placement="right">
                //                 <Fab sx={{
                //                     position: 'absolute', 
                //                     top: -el.y, 
                //                     backgroundColor: el.color
                //                 }}>
                //                     {el.icon}
                //                 </Fab>
                //             </Tooltip>
                //         ))}
                //     </Stack>
                //     <InputAdornment  >
                //             <IconButton onBlur={()=> {setOpenAction(false)}} onClick={()=> {setOpenAction((oldVal)=> !oldVal)}}>
                //                 <LinkSimple/>
                //             </IconButton>
                //     </InputAdornment> 
                // </Stack>
            ), 
            endAdornment: (
                <div></div>
            )
            // <InputAdornment>
            //     <IconButton onBlur={()=> {setOpenPicker(false)}} onClick={()=> {setOpenPicker((oldVal)=> !oldVal)}}>
            //         <Smiley/>
            //     </IconButton>
            // </InputAdornment>, 
        }}/>
    )
}
export function ConvoFooter() {
    const theme = useTheme()
    const [openPicker, setOpenPicker] = useState(false)
    const {chatList} = useSelector(state => state.app)
    const {_id, currentChat, room_id, connection} = useSelector( state => state.auth)
    const [message, setMessage] = useState('')
    function handleMessage (e) {
        setMessage(e.target.value)
    }
    function handleClick(){
        if (message.length > 0 && connection){
            // find the roomIndex
            const roomIndex = chatList.findIndex(chat => chat._id === room_id)
            const to = chatList[roomIndex].participants.filter(participant => participant !== _id)
            socket.emit(
              "text_message",
              { 
                from: _id, 
                to: to[0],
                type: "Text", 
                file: "", 
                created_at: Date.now(),
                message: message.trim(), 
                currentChat: to[0],
             },
              () => {
                alert("request sent");
              },
              );
        }
        setMessage('')
    }
    useEffect(()=>{

    }, [])
    return ( 
        <Box p={1} sx={{ width: '100%',backgroundColor: theme.palette.mode === 'light'? '#f8faff' : theme.palette.background.paper, boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
            <Stack direction='row' alignItems={'center'} spacing={1}>
                {/* Chat input */}
                <Stack sx={{width : '100%'}}>
                    <Box sx={{
                        display : openPicker ? 'inline' : 'none',
                        zIndex: 10, 
                        position: 'fixed', 
                        bottom: 81, 
                        right: 100
                    }}>
                        <Picker theme={theme.palette.mode} data={data}/>
                    </Box>
                    <ChatInput handleClick={handleClick} setOpenPicker={setOpenPicker} message={message} handleMessage={handleMessage}/>
                </Stack>
                <Box sx={{height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5}}>
                    <Stack justifyContent={'center'} alignItems="center" sx={{width: '100%', height: '100%'}}>
                        <IconButton onClick={handleClick}>
                            <PaperPlaneTilt color="#fff"/>
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
     );
}

export default ConvoFooter;