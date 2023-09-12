import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import {TextMessage, TimeLine} from "./MsgTypes";

function Message() {
    return ( 
        <Box p={3}>
            <Stack spacing={3}>
                {Chat_History.map((el)=>{
                    switch (el.type) {
                        case 'divider': 
                            return <TimeLine el={el}/>
                            break;
                        case 'msg': 
                            switch(el.subtype) {
                                case 'doc': 
                                break; 
                                case 'link': 
                                break; 
                                case 'img': 
                                break; 
                                case 'reply': 
                                break; 

                                default: //  txt msg 
                                return <TextMessage el={el}/>
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