import { Avatar, Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { Microphone, PhoneCall, PhoneDisconnect, SpeakerHigh } from "phosphor-react";
import { ZegoExpressEngine } from "zego-express-engine-webrtc";

function Call() {
    const theme = useTheme()
    const appID = 110868845; 
    const server = "wss://webliveroom110868845-api.coolzcloud.com/ws"

    // initiate the zegoExpressEngine
    // const zg = new ZegoExpressEngine(appID, server)

    // check browser competability

    // log in the room

    return ( 
        <Box sx={{
            position: 'absolute', 
            top: '0',
            left: '0',
            right: '0',
            height: '100px',
            zIndex: '200'
        }}
        p={2}
            >
                <Stack alignItems={'center'} justifyContent={'center'}>
                    <Stack sx={{ 
                        backgroundColor: "#282c34", 
                        color: "white", 
                        height: '100px', 
                        borderRadius: '10px',
                        boxShadow: "0px 0px 2px rgba(40,44,52, 0.9)",
                        paddingLeft: '20px',
                        paddingRight: '20px',
                    }}
                    p={1} direction={'row'} spacing={2}>
                        <Stack sx={{
                            // border: '1px dashed grey', 
                            // height: '100%', 
                            // width: '90px'  
                        }} alignItems={'center'} justifyContent={'center'}>
                            {/* Profile image of the person being called or calling */}
                            <Avatar sx={{
                                width: '70px', 
                                height: '70px', 
                                border: '2px solid white'
                            }}/>
                        </Stack> 
                        <Stack sx={{
                            // border: '1px dashed grey', 
                            height: '100%', 
                            // width: '200px'
                        }} justifyContent={'center'} spacing={1}>
                            <Stack spacing={2} direction={'row'}>
                                <Stack>
                                    {/* name of the person who's calling or being called */}
                                    <Typography variant={"subtitle2"}>Klay Thomp...</Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant={"subtitle2"}>24:02</Typography>
                                    {/* duration of call */}
                                </Stack>
                            </Stack>
                            <Stack direction={'row'} spacing={1}>
                                {/* Accept and decline buttons */}
                                <IconButton sx={{
                                    backgroundColor: '#DB4437',
                                    width: '45px', 
                                    height: '45px', 
                                }}>
                                    <PhoneDisconnect color="white"/>
                                </IconButton>
                                <IconButton sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    width: '45px', 
                                    height: '45px', 
                                }}>
                                    <Microphone color="white"/>
                                </IconButton>
                                <IconButton sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    width: '45px', 
                                    height: '45px', 
                                }}>
                                    <SpeakerHigh color="white"/>
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
        </Box>
     );
}

export default Call;


