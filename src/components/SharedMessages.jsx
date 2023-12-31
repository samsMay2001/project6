import { Box, Grid, IconButton, Stack, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";
import { CaretLeft } from "phosphor-react";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import { SHARED_DOCUMENTS, SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";

function SharedMessages() {
    const theme = useTheme(); 
    const dispatch = useDispatch(); 
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return ( 
        <Box sx={
            {
                // width: 323,
                position: 'absolute',
                width: '320px',
                height: '100vh', 
                top: 0,  
                right: 0, 
                // border: '1px dashed grey'
            }}>
                <Stack sx={{height: '100vh'}}>
                    {/* Header */}
                    <Box sx={{
                        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)', 
                        width: "100%", 
                        background: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background, 
                        // border: '1px dashed grey'
                    }}>
                        <Stack sx={{height: '100%'}} p={2} direction={'row'} alignItems={'center'} spacing={3}>
                            <IconButton onClick={()=>{
                                dispatch(UpdateSidebarType("CONTACT"))
                            }}>
                                <CaretLeft />
                            </IconButton>
                            <Typography variant="subtitle2">Shared Messages</Typography>
                        </Stack>
                    </Box>
                    <Tabs value={value} onChange={handleChange} centered >
                        <Tab label="Media"  />
                        <Tab label="Links"  />
                        <Tab label="Docs"  />
                    </Tabs>

                    {/* Body */}
                    <Stack sx={{height: '100%', position: 'relative', flexGrow: 1}} p={3} spacing={3}>
                        {(()=>{
                            switch(value) {
                                case 0: 
                                    // images
                                    return <Grid container spacing={2}>
                                        {
                                            [0, 1, 2, 3, 4, 5, 6].map((el)=> {
                                                return <Grid item xs={4}>
                                                    <img src={faker.image.avatar()} alt={faker.name.fullName}/>
                                                </Grid>
                                            })
                                        }
                                    </Grid>
                                case 1: 
                                    // Links
                                    return SHARED_LINKS.map((el)=> <LinkMsg el={el}/>)
                                    case 2: 
                                    // Docs
                                    return SHARED_DOCUMENTS.map((el)=> <DocMsg el={el}/>)
                                default:
                                    break; 
                            }
                        })()}
                    </Stack>
                </Stack>
        </Box>
     );
}

export default SharedMessages;