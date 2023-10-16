import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import {DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMessage, TimeLine} from "./MsgTypes";

function Message({menu}) {
    return ( 
        <Box p={3} sx={
            {
                position: 'absolute', 
                left: 0,
                top: 0,
                width: '100%',
                bottom: 0, 
                overflowY: 'scroll'}}>
            <Stack spacing={3} >
                {Chat_History.map((el)=>{
                    switch (el.type) {
                        case 'divider': 
                            return <TimeLine el={el} />
                        case 'msg': 
                            switch(el.subtype) {
                                case 'doc': 
                                return <DocMsg el={el} menu={menu}/>
                                case 'link': 
                                return <LinkMsg el={el}  menu={menu}/>
                                case 'img': 
                                return <MediaMsg el={el}  menu={menu}/>
                                
                                case 'reply': 
                                return <ReplyMsg el={el} menu={menu}/>

                                default: //  txt msg 
                                return <TextMessage el={el} menu={menu}/>
                                // break; 
                            }
                            return 
                            break;
                        default:  
                            return <></>
                            break;
                    }
                })}
            </Stack>
        </Box>
     );
}

export default Message;