import { Avatar, Box, Divider, IconButton, InputAdornment, Stack, TextField, Typography, useTheme } from "@mui/material";
import {styled} from '@mui/material/styles'
import { StyledBadge } from "../../pages/dashboard/Chat";
import { faker } from "@faker-js/faker";
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlane, PaperPlaneTilt, Phone, Smiley, VideoCamera } from "phosphor-react";
import ConvoHeader from "./Header";

const StyledInput = styled(TextField)(({ theme }) => (
    {
        // color: "inherit",
        "& .MuiInputBase-input": {
            paddingTop: '12px',
            paddingBottom: '12px',
            // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            // width: '100%'
        },

        "& input": {
            autocomplete: 'off', // Add this line to disable autocomplete
          },
    }
))
export function ConvoFooter() {
    const theme = useTheme()
    return ( 
        <Box p={2} sx={{ width: '100%',backgroundColor: theme.palette.mode === 'light'? '#f8faff' : theme.palette.background.paper, boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
            <Stack direction='row' alignItems={'center'} spacing={3}>
                <StyledInput fullWidth placeholder='Write a message' variant='filled' InputProps={{
                    disableUnderline: true, 
                    startAdornment: 
                    <InputAdornment>
                        <IconButton>
                            <LinkSimple/>
                        </IconButton>
                    </InputAdornment>, 
                    endAdornment: 
                    <InputAdornment>
                        <IconButton>
                            <Smiley/>
                        </IconButton>
                    </InputAdornment>, 
                }}/>
                <Box sx={{height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5}}>
                    <Stack justifyContent={'center'} alignItems="center" sx={{width: '100%', height: '100%'}}>
                        <IconButton>
                            <PaperPlaneTilt color="#fff"/>
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
     );
}

export default ConvoFooter;