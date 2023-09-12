import { Divider, Stack, Typography, useTheme } from "@mui/material";

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

export {TimeLine};