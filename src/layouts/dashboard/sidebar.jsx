import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import {useTheme} from "@mui/material/styles";
import React from "react";
// import { Outlet } from "react-router-dom";
import Logo from '../../assets/Images/logo.ico'
import { Nav_Buttons } from '../../data'
import { Gear } from "phosphor-react";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import { AntSwitch } from "./antswitch";
// import SideBar from "./sidebar";





function SideBar() {

    const theme = useTheme()

    const [selected, setSelected] = useState(0)

    const {onToggleMode} = useSettings(); 
    return ( 
        <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, height: '100vh', boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)", width: 100 }}>

        <Stack spacing={3} direction="column" sx={{ width: '100%', height: '100%' }} alignItems={'center'} justifyContent={'space-between'}>
          <Stack alignItems={'center'} spacing={4}>

            <Box sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,

            }}>
              <img src={Logo} alt="Chat App Logo" />

            </Box>
            <Stack sx={{ width: 'max-content' }} spacing={3} alignItems='center'>
              {Nav_Buttons.map((el) => (
                el.index === selected ?
                  <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5, }}>
                    <IconButton key={el.index} sx={{ width: 'max-content', color: '#fff' }} onClick={()=>{setSelected(el.index)}}>
                      {el.icon}
                    </IconButton>
                  </Box>
                  :
                  <IconButton key={el.index} sx={{ width: 'max-content', color: theme.palette.mode ==="light" ? '#000' : theme.palette.text.primary   }} onClick={()=>{setSelected(el.index)}}>

                    {el.icon}
                  </IconButton>
              ))}
              <Divider sx={{ width: "48px" }} />

              {selected === 3 ?
                <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5, }}>
                  <IconButton onClick={()=>{setSelected(3)}} sx={{ width: 'max-content', color: '#fff' }}>
                    <Gear />
                  </IconButton>
                </Box>
                :
                <IconButton onClick={()=>{setSelected(3)}} sx={{ width: 'max-content', color: theme.palette.mode ==="light" ? '#000' : theme.palette.text.primary }}>
                  <Gear />
                </IconButton>
              }

            </Stack>

          </Stack>
          <Stack spacing={4}>
            <AntSwitch defaultChecked onChange={()=>{onToggleMode()}} />
            <Avatar  src={faker.image.avatar()}/>
          </Stack>
        </Stack>
      </Box>
     );
}

export default SideBar;