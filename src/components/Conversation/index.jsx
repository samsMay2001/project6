import { Box, Stack } from "@mui/material";

function Conversation() {
    return (  
        <Stack height={'100%'} maxHeight = {'100vh'} width={'auto'} >
            
            {/* Chat header */}
            <Box sx={{height: 100, width: '100%', backgroundColor: '#f8faff', boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}>
                
            </Box>

            {/* msgs */}
            <Box sx={{ flexGrow: 1, width: '100%', }}></Box>
            
            {/* Chat footer */}
            <Box sx={{height: 100, width: '100%', backgroundColor: '#f8faff', boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)' }}></Box>
        </Stack>
    );
}

export default Conversation;