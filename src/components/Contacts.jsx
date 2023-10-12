// import { useTheme } from "@emotion/react";
import { Avatar, Box, Button, Divider, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { Bell, CaretRight, Phone, Star, VideoCamera, X } from "phosphor-react";
import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebarType } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import { AntSwitch } from "../layouts/dashboard/antswitch";
// import { Stack } from "phosphor-react";
// import {Stack}

function Contact() {
    const theme = useTheme()
    const dispatch = useDispatch(); 
    return ( 
        <Box sx={
            {
                // width: 323,
                position: 'absolute',
                width: '320px',
                height: '100vh', 
                top: 0,  
                right: 0
            }}>
            <Stack sx={{height: '100vh'}}>
                {/* Header */}
                <Box sx={{
                    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', 
                    width: "100%", 
                    background: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background
                }}>
                    <Stack sx={{height: '100%', p:2}} direction={'row'} alignItems={'center'} justifyContent={'space-between'} spacing={3}>
                        <Typography variant="subtitle2">Contact Info</Typography>
                        <IconButton onClick={()=>{
                            dispatch(ToggleSidebar())
                        }}>
                            <X />
                        </IconButton>
                    </Stack>
                </Box>

                {/* Body */}
                <Stack sx={{height: '100%', position: 'relative', flexGrow: 1, overflowY: 'scroll'}} p={3} spacing={3}>
                    <Stack alignItems={'center'} direction={'row'} spacing={2}>
                        <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{height: 64, width: 64}}/>
                        <Stack spacing={0.5}>
                            <Typography variant="article" fontWeight={600}>
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant="body2" fontWeight={600}>
                                {'+91 729 2829 2992'}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
                        <Stack  spacing={1} alignItems={'center'}> 
                            <IconButton>
                                <Phone />
                            </IconButton>
                            <Typography variant="overline">Voice</Typography>
                        </Stack>
                        <Stack  spacing={1} alignItems={'center'}> 
                            <IconButton>
                                <VideoCamera />
                            </IconButton>
                            <Typography variant="overline">Video</Typography>
                        </Stack>
                    </Stack>
                    <Divider/>
                    <Stack spacing={0.5}>
                        <Typography variant="article">About</Typography>
                        <Typography variant="body2">Imagination is the only limit</Typography>
                    </Stack>
                    <Divider/>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant="subtitle2">Media, Link & Docs</Typography>
                        <Button onClick={()=>{
                            dispatch(UpdateSidebarType("SHARED"))
                        }} endIcon={<CaretRight/>}>
                            401
                        </Button>
                    </Stack>
                    <Stack direction={'row '} justifyContent={'space-between'} spacing={2} alignItems={'center'}>
                        {[1, 2, 3].map((el) => (
                            <Box>
                                <img width={70} src={faker.image.food()} alt={faker.name.fullName()}/>
                            </Box>
                        ))}
                    </Stack>
                    <Divider/>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Stack direction={'row'} alignItems={'center'} spacing={2}>
                            <Star/>
                            <Typography variant="subtitle2">Starred messages</Typography>
                        </Stack> 
                        <IconButton onClick={()=>{
                            dispatch(UpdateSidebarType("STARRED"))
                        }}>
                            <CaretRight/>
                        </IconButton>
                    </Stack>
                    <Divider/>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                        <Stack direction={'row'} alignItems={'center'} spacing={2}>
                            <Bell/>
                            <Typography variant="subtitle2">Mute Notifications</Typography>
                        </Stack> 
                        <AntSwitch />
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        <Button fullWidth variant="outlined">Block</Button>
                        <Button fullWidth variant="outlined">Delete</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
     );
}

export default Contact;