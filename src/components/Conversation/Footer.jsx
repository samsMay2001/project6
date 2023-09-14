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

const ChatInput = ({setOpenPicker}) => {

    const [openActions, setOpenAction] = useState(false); 
    return (
        <StyledInput fullWidth placeholder='Write a message' variant='filled' InputProps={{
            disableUnderline: true, 
            startAdornment: (
                <Stack sx={{width: 'max-content'}}>
                    <Stack sx={{
                        position: 'relative', 
                        display: openActions ? 'inline-block' : 'none'
                        }}>
                        {Actions.map((el)=> (
                            <Tooltip title={el.title} placement="right">
                                <Fab sx={{
                                    position: 'absolute', 
                                    top: -el.y, 
                                    backgroundColor: el.color
                                }}>
                                    {el.icon}
                                </Fab>
                            </Tooltip>
                        ))}
                    </Stack>
                    <InputAdornment  >
                            <IconButton onBlur={()=> {setOpenAction(false)}} onClick={()=> {setOpenAction((oldVal)=> !oldVal)}}>
                                <LinkSimple/>
                            </IconButton>
                    </InputAdornment> 
                </Stack>
            ), 
            endAdornment: 
            <InputAdornment>
                <IconButton onBlur={()=> {setOpenPicker(false)}} onClick={()=> {setOpenPicker((oldVal)=> !oldVal)}}>
                    <Smiley/>
                </IconButton>
            </InputAdornment>, 
        }}/>
    )
}
export function ConvoFooter() {
    const theme = useTheme()
    const [openPicker, setOpenPicker] = useState(false)
    return ( 
        <Box p={2} sx={{ width: '100%',backgroundColor: theme.palette.mode === 'light'? '#f8faff' : theme.palette.background.paper, boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
            <Stack direction='row' alignItems={'center'} spacing={3}>
                {/* Chat input */}
                <Stack sx={{width : '100%'}}>
                    <Box sx={{
                        display : openPicker ? 'inline' : 'none',
                        zIndex: 10, 
                        position: 'fixed', 
                        bottom: 81, 
                        right: 100
                    }}>
                        {/* 34:01 */}
                        <Picker theme={theme.palette.mode} data={data}/>
                    </Box>
                    <ChatInput setOpenPicker={setOpenPicker}/>
                </Stack>
                <Box sx={{height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5}}>
                    <Stack justifyContent={'center'} alignItems="center" sx={{width: '100%', height: '100%'}}>
                        <IconButton >
                            <PaperPlaneTilt color="#fff"/>
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
     );
}

export default ConvoFooter;