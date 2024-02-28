import { Box } from "@mui/material"
import Chats from "../../pages/dashboard/Chat"


export const MobileChatSibar = () => {
    return (
        <Box sx={{
            position: 'absolute',
            right: 0, 
            left: 0, 
            height: '100%', 
        }}>
            {/* Mobile Chat Sidebar Component */}
            {/* chat component */}
            <Box sx={{ position: 'absolute', top: 0, bottom: '100px', right: 0, left: 0 }}>
                <Chats/>
            </Box>
            <Box sx={{
                position: 'absolute',
                height: '100px',
                width: '100%',
                bottom: '0px',
            }}>
                {/* sidebar component */}
            </Box>
        </Box>
    )
}