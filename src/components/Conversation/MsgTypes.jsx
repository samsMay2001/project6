import { faker } from "@faker-js/faker";
import { Box, Divider, Link, Stack, Typography } from "@mui/material";

import {useTheme} from "@mui/material/styles"

function TimeLine({el}) {
    const theme = useTheme(); 
    return ( 
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Divider width={'46%'} />
                <Typography variant={'caption'} sx={{color: theme.palette.text}}>{el.text}</Typography>
            <Divider width={'46%'} />
        </Stack>
     );
}

function MediaMsg({el}){
    const theme= useTheme()
    return (
        <Stack direction={'row'} justifyContent={el.incoming ? "start" : 'end'}>
            <Box p={1.5} sx={
                {
                    backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                    borderRadius: 1.5, 
                    width: 'max-content'
                }}>
                <Stack spacing={1}>
                    {/* {el.img} */}
                    <img src={el.img} alt={'file not found'} style={{maxHeight: 210,  borderRadius: '10px'}}/>
                    <Typography variant="body2" color={el.incoming ? theme.palette.text : '#fff'}>
                        {el.message}
                    </Typography>
                </Stack>
            </Box>
        </Stack>
    )
}

function TextMessage({el}) {
    const theme = useTheme(); 
    return ( 
        <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
            <Box p={1.5} sx={
                {
                    backgroundColor: el.incoming ? theme.palette.background.paper : theme.palette.primary.main, 
                    borderRadius : 1.5, 
                    width: 'max-content'
                }
                    }>
                        <Typography variant={'body2'} color={el.incoming ? theme.palette.text : '#fff'}>
                            {el.message}
                        </Typography>
            </Box>
        </Stack>
     );
}

function ReplyMsg({el}){
    const theme= useTheme()
    return (
        <Stack direction={'row'} justifyContent={el.incoming ? "start" : 'end'}>
            <Box p={1.5} sx={
                {
                    backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main,
                    borderRadius: 1.5, 
                    width: 'max-content'
                }}>
                <Stack spacing={2} >
                    <Stack spacing={2} p={2} direction='column' alignItems='center' sx={
                        {
                            backgroundColor: theme.palette.background.paper, borderRadius: 1
                        }}>
                            <Typography variant='body2' color={theme.palette.text}>
                                {el.message}
                            </Typography>
                    </Stack>
                    <Typography variant='body2' color={el.incoming ? theme.palette.text : '#fff'}>
                        {el.reply}
                    </Typography>
                    {/* {el.img} */}
                    
                </Stack>
            </Box>
        </Stack>
    )
}

function LinkMsg({el}){
    const theme = useTheme()
    return (
        <Stack direction={'row'} justifyContent={el.incoming ? 'start' : 'end'}>
            <Box p={1.5} sx={
                {
                    backgroundColor: el.incoming ? theme.palette.background.paper : theme.palette.primary.main, 
                    borderRadius : 1.5, 
                    width: 'max-content'
                }
                    }>
                        <Stack spacing={2}>
                            <Stack spacing={3} p={2} alignItems={'sleft'} sx={{
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 1
                            }} >
                                <img src={el.preview} alt={el.message} style={{
                                    maxHeight: 210, 
                                    borderRadius: '10px'
                                }}/>
                                <Stack spacing={2}>
                                    <Typography variant={'subtitle2'}>
                                        Creating A Chat App
                                    </Typography>
                                    <Typography variant={'subtitle2'} component={Link} sx={{
                                        color: theme.palette.primary.main
                                    }}
                                    to={'//https://www.youtube.com'}
                                    >
                                        www.yoututbe.com
                                    </Typography>
                                </Stack>
                                <Typography variant="body2" color={el.incoming ? theme.palette.text : '#fff'}>
                                    {el.message}
                                </Typography>
                            </Stack>

                        </Stack>
            </Box>
        </Stack>
    )
}
export {TimeLine, TextMessage, MediaMsg, ReplyMsg, LinkMsg};