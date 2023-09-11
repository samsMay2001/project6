import { faker } from "@faker-js/faker";
import { Box, Stack, Typography, InputBase, Button, Divider, Badge, Avatar } from "@mui/material";
// import InputBase from "@mui/material/InputBase/InputBase";

import { styled, alpha } from '@mui/material/styles'
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { useEffect } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const ChatElement = () => {
    // const [avatarImg, ]
    // useEffect(()=>{

    // }, [])
    return (
        <Box sx={{
            width: '100%',
            borderRadius: 1,
            background: '#fff'
        }}
            p={2}
        >
            <Stack direction="row" alignItems='center' justifyContent={'space-between'}>
                <Stack direction={'row'} spacing={2}>
                    <StyledBadge 
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot">
                        <Avatar src={faker.image.avatar()} />
                    </StyledBadge>
                    <Stack spacing={0.3}>
                        <Typography variant={'subtitle2'}>
                            Pedro Alejandro
                        </Typography>
                        <Typography variant={'caption'}>
                            How are you?
                        </Typography>
                    </Stack>
                    <Stack spacing={2} alignItems='center' >
                        <Typography sx={{fontWeigth: 600}} variant="caption">9:36</Typography>
                        <Badge color="primary" badgeContent={2}/>
                    </Stack>
                </Stack>
            </Stack>
                
        </Box>
    )
}

const Search = styled("div")(({ theme }) => (
    {
        position: 'relative',
        borderRadius: 20,
        // border : '1px dashed grey',
        backgroundColor: alpha(theme.palette.background.paper, 1),
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        // height: '50px'
    }
))
const SearchIconWrapper = styled("div")(({ theme }) => (
    {
        padding: theme.spacing(0, 2),
        // border: '1px dashed grey',
        height: "100%",
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
))
const StyledInputBase = styled(InputBase)(({ theme }) => (
    {
        color: "inherit",
        "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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
                <Stack direction="row" alignItems={'center'} justifyContent={'space-between'}>
                    <Typography variant={'h5'}>
                        Chats
                    </Typography>
                    <CircleDashed />
                </Stack>

                {/* search bar */}
                <Stack sx={{ width: '100%' }} spacing={1}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color="#709CE6" />
                        </SearchIconWrapper>
                        <StyledInputBase placeholder={'Search...'} inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                    <Stack spacing={1}>
                        <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
                            <ArchiveBox size={24} />
                            <Button>Archive</Button>
                        </Stack>
                        <Divider />
                    </Stack>
                    <Stack direction={'column'}>
                        <ChatElement />
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Chats;