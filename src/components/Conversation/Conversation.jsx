import { Avatar, Box, Divider, IconButton, InputAdornment, Stack, TextField, Typography, useTheme } from "@mui/material";
import {styled} from '@mui/material/styles'
import { StyledBadge } from "../../pages/dashboard/Chat";
import { faker } from "@faker-js/faker";
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlane, PaperPlaneTilt, Phone, Smiley, VideoCamera } from "phosphor-react";
import ConvoHeader from "./Header";
import ConvoFooter from "./Footer";
import Message from "./messages";

const StyledInput = styled(TextField)(({ theme }) => (
    {
        // color: "inherit",
        "& .MuiInputBase-input": {
            paddingTop: '12px',
            paddingBottom: '12px',
            // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            // width: '100%'
        }
    }
))

function Conversation() {
    const theme = useTheme()
    return (
        <Stack height={'100vh'}  width={'100%'} alignItems={'center'}>

            {/* Chat header */}
            <ConvoHeader/>

            {/* msgs */}
            <Box sx={{ flexGrow: 1, width: '100%', position: 'relative'}}>
                <Message menu={true}/>
            </Box>

            {/* Chat footer */}
            <ConvoFooter/>
        </Stack>
    );
}

export default Conversation;