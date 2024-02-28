import { Box } from "@mui/material"
import Chats from "../../pages/dashboard/Chat"
import SideBarMobile from "./sidebar-mobile"


export const MobileChatSibar = () => {
    return (
        <Box sx={{
            position: 'absolute',
            right: 0, 
            left: 0, 
            height: '100%', 
        }}>
            {/* chat component */}
            <Box sx={{ 
                position: 'absolute',
                top: 0, bottom: '80px', 
                right: 0, 
                left: 0 }}>
                <Chats/>
            </Box>

            {/* sidebar component */}
            <Box sx={{
                position: 'absolute',
                height: '80px',
                width: '100%',
                bottom: '0px',
                zIndex: '400'
            }} onClick={()=>{console.log("clicked sidebar")}}>
                <SideBarMobile/>
            </Box>
        </Box>
    )
}