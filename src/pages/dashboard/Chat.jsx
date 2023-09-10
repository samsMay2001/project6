import { Box, Stack, Typography, InputBase} from "@mui/material";
// import InputBase from "@mui/material/InputBase/InputBase";

import {styled, alpha} from '@mui/material/styles'
import { CircleDashed, MagnifyingGlass } from "phosphor-react";


const Search = styled("div")(({theme})=>(
    {
        position : 'relative', 
        borderRadius : 20,
        // border : '1px dashed grey',
        backgroundColor : alpha(theme.palette.background.paper,1), 
        marginRight: theme.spacing(2), 
        marginLeft: 0,
        width: '100%',
        // height: '50px'
    }
))
const SearchIconWrapper = styled("div")(({theme})=>(
    {
        padding: theme.spacing(0, 2), 
        // border: '1px dashed grey',
        height: "100%",
        position: 'absolute', 
        pointerEvents: 'none', 
        display: 'flex', 
        alignItems : 'center', 
        justifyContent: 'center'
    }
))
const StyledInputBase = styled(InputBase)(({theme})=>(
    {
        color : "inherit", 
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 0), 
            paddingLeft : `calc(1em + ${theme.spacing(4)})`, 
            width: '100%'
        }
    }
))


function Chats() {
    return (
        <Box sx={{
            position: 'relative',
            height: '100vh',
            width: '320px',
            backgroundColor: '#F8FAFF',
            boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)'
        }}>
            <Stack p={3} spacing={2}>
                <Stack direction="row" alignItems={'center' } justifyContent={'space-between'}>
                    <Typography variant={'h5'}>
                        Chats
                    </Typography>
                    <CircleDashed/>
                </Stack>

                {/* search bar */}
                <Stack sx={{width: '100%' }}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709CE6"/>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder = {'Search...'} inputProps={{'aria-label': 'search'}} />
                    </Search>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Chats;