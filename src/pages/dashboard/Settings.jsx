import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { Bell, CaretLeft, Lock, PencilCircle } from "phosphor-react";

function Settings() {
    const theme = useTheme()

    const list = [
        {
            key: 1, 
            icon: <Lock size={20}/>, 
            title: "Privacy", 
            onclick: () => {}
        }, 
        {
            key: 2, 
            icon: <PencilCircle size={20}/>, 
            title: "Security", 
            onclick: () => {}
        }, 
    ]
    return ( 
        <>
           { true && <Stack direction={'row'} sx={{width: '100%'}}>
                {/* Left panel */}
                <Box sx={{
                    // overflowY: "scroll", 
                    height: "100vh", 
                    width: 320, 
                    background: theme.palette.mode==="light" ? '#F8FAFF' : theme.palette.background.default ,  
                    // F8FAFF
                    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', 
                }}>
                    <Stack p={4} spacing={5}>
                        <Stack direction={'row'} alignItems={'center'} spacing={3}>
                            <IconButton>
                                <CaretLeft size={24} color={'#4B4B4B'}/>
                            </IconButton>
                            <Typography variant="h6">
                                Settings
                            </Typography>
                        </Stack>

                        {/* Profile */}
                        <Stack direction={'row'} spacing={1}>
                            <Avatar sx={{width: 56, height: 56}} src={faker.image.avatar()} alt={faker.name.fullName()} />
                            <Stack spacing={0.5}>
                                <Typography variant="article">
                                    {faker.name.fullName()}
                                </Typography>
                                <Typography variant="body2">
                                    {faker.random.words()}
                                </Typography>

                            </Stack>
                        </Stack>

                        {/*List of options  */}
                        <Stack spacing={4}>
                            {list.map(({key, icon, title, onclick})=> (
                                <Stack spacing={2} sx={{cursor: "pointer"}} onclick={onclick}>
                                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                        {icon}
                                        <Typography variant="body2">{title}</Typography>
                                    </Stack>
                                    {key !== 2 && <Divider/>}
                                </Stack>
                            ))}
                        </Stack>
                    </Stack>
                </Box>
                {/* Right panel */}
            </Stack> }
            {/* Profile */}
        </>
     );
}

export default Settings;