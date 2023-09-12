import { Box, Divider, Stack, Typography } from "@mui/material";

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

export {TimeLine, TextMessage};