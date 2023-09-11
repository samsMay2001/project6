import { Avatar, Box, Divider, IconButton, InputAdornment, Stack, TextField, Typography, useTheme } from "@mui/material";
import {styled} from '@mui/material/styles'
import { StyledBadge } from "../../pages/dashboard/Chat";
import { faker } from "@faker-js/faker";
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlane, PaperPlaneTilt, Phone, Smiley, VideoCamera } from "phosphor-react";

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
        <Stack height={'100%'} maxHeight={'100vh'} width={'auto'} alignItems={'center'}>

            {/* Chat header */}
            <Box p={2} sx={{ width: '100%', backgroundColor: theme.palette.mode === 'light'? '#f8faff' : theme.palette.background.paper , boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
                <Stack direction={'row'} spacing={2} height={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                    {/* left corner items */}

                    <Stack direction={'row'} alignItems='center' spacing={2}>
                        {/* Avatar and text section */}
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot">
                            <Avatar src={faker.image.avatar()} />
                        </StyledBadge>
                        <Stack spacing={0.3}>
                            <Typography variant={'subtitle2'}>
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant={'caption'}>
                                {'online'}
                            </Typography>
                        </Stack>
                    </Stack>

                    {/* right section, which has icons  */}
                    <Stack direction='row' alignItems='center' spacing={3}>
                        <IconButton>
                            <VideoCamera />
                        </IconButton>
                        <IconButton>
                            <Phone />
                        </IconButton>
                        <IconButton>
                            <MagnifyingGlass />
                        </IconButton>
                        <Divider orientation="vertical" flexItem />
                        <IconButton>
                            <CaretDown />
                        </IconButton>
                    </Stack>

                </Stack>
            </Box>

            {/* msgs */}
            <Box sx={{ flexGrow: 1, width: '100%', }}>

            </Box>

            {/* Chat footer */}
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
        </Stack>
    );
}

export default Conversation;