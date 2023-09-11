import { Avatar, Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { StyledBadge } from "../../pages/dashboard/Chat";
import { faker } from "@faker-js/faker";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";

function Conversation() {
    return (  
        <Stack height={'100%'} maxHeight = {'100vh'} width={'auto'}  alignItems={'center'}>
            
            {/* Chat header */}
            <Box p={2} sx={{ width: '100%', backgroundColor: '#f8faff', boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
                <Stack direction={'row'} spacing={2} height={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack direction={'row'} alignItems='center' spacing={2}>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot">
                            <Avatar src={faker.image.avatar()} />
                        </StyledBadge> 
                        {/* text section */}
                        <Stack spacing={0.3}>
                            <Typography variant={'subtitle2'}>
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant={'caption'}>
                                {'online'}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction='row' alignItems='center' spacing={3}>
                        <IconButton>
                            <VideoCamera/>
                        </IconButton>
                        <IconButton>
                            <Phone/>
                        </IconButton>
                        <IconButton>
                            <MagnifyingGlass/>
                        </IconButton>
                        <Divider orientation="vertical" flexItem/>
                        <IconButton>
                            <CaretDown/>
                        </IconButton>
                    </Stack>
                </Stack>
            </Box>

            {/* msgs */}
            <Box sx={{ flexGrow: 1, width: '100%', }}>
                
            </Box>
            
            {/* Chat footer */}
            <Box sx={{height: 100, width: '100%', backgroundColor: '#f8faff', boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}></Box>
        </Stack>
    );
}

export default Conversation;