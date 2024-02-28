import {
    Avatar,
    Box,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Stack,
  } from "@mui/material";
  import { SignOut } from "phosphor-react";
  import { useTheme } from "@mui/material/styles";
  import React from "react";
  // import { Outlet } from "react-router-dom";
  import Logo from "../../assets/Images/logo.ico";
  import { Nav_Buttons, Profile_Menu } from "../../data";
  import { Gear } from "phosphor-react";
  import { useState } from "react";
  import { faker } from "@faker-js/faker";
  import useSettings from "../../hooks/useSettings";
  import { AntSwitch } from "./antswitch";
  import { values } from "emoji-mart";
  import { useNavigate } from "react-router-dom";
  import { dispatch } from "../../redux/store";
  import { useDispatch } from "react-redux";
  import { logoutUser } from "../../redux/slices/auth";
  import { resetAppState } from "../../redux/slices/app";
  // import SideBarMobile from "./sidebarMobile";
  
  const getPath = (index) => {
    switch (index) {
      case 0:
        return "/app";
  
      case 3:
        return "/settings";
  
      default:
        break;
    }
  };
  
  function SideBarMobile() {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(0);
  
    const { onToggleMode } = useSettings();
  
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <Box
        p={1.5}
        sx={{
          backgroundColor: theme.palette.background.paper,
          width: "100%",
          height: '100px',
          boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)",
          // width: 100,
        }}
      >
        <Stack
          spacing={3}
          direction="row"
          sx={{ width: "100%", height: "100%" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img src={Logo} alt="Chat App Logo" />
            </Box>
            <Stack sx={{ width: "max-content" }} spacing={2} alignItems="center">
              {Nav_Buttons.map((el, index) =>
                el.index === selected ? (
                  <Box
                    key={index}
                    p={2}
                    sx={{
                      backgroundColor:
                        theme.palette.mode === "light"
                          ? "rgb(0, 0, 0, .07)"
                          : "rgb(255, 255, 255, 0.07)",
                      borderRadius: 1.5,
                      cursor: "pointer",
                    }}
                  >
                    <Stack
                      key={el.index}
                      sx={{
                        width: "max-content",
                        color:
                          theme.palette.mode === "light" ? "rgb(0,0,0)" : "#fff",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelected(el.index);
                        navigate(getPath(el.index));
                        // console.log(getPath(el.index))
                      }}
                    >
                      {el.icon}
                    </Stack>
                  </Box>
                ) : (
                  <Stack
                    p={2}
                    key={index}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setSelected(el.index);
                      navigate(getPath(el.index));
                    }}
                  >
                    {el.icon}
                  </Stack>
                ),
              )}
              {/* Sign out button */}
  
              <Divider sx={{ width: "48px" }} />
  
              {selected === 3 ? (
                <Box
                  p={2}
                  sx={{
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? "rgb(0, 0, 0, .07)"
                        : "rgb(255, 255, 255, 0.07)",
                    borderRadius: 1.5,
                    cursor: "pointer",
                  }}
                >
                  <Stack
                    onClick={() => {
                      setSelected(3);
                      navigate(getPath(3));
                    }}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light" ? "rgb(0,0,0)" : "#fff",
                      cursor: "pointer",
                    }}
                  >
                    <Gear size={24} />
                  </Stack>
                </Box>
              ) : (
                <Stack
                  p={2}
                  onClick={() => {
                    setSelected(3);
                    navigate(getPath(3));
                  }}
                  sx={{
                    width: "max-content",
                    color: theme.palette.mode === "light" ? "rgb(0,0,0)" : "#fff",
                    cursor: "pointer",
                  }}
                >
                  <Gear size={24} />
                </Stack>
              )}
              <Divider sx={{ width: "48px" }} />
              <Box sx={{ backgroundColor: theme.palette.main }}>
                <IconButton
                  sx={{
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                  onClick={() => {
                    dispatch(resetAppState());
                    dispatch(logoutUser());
                    localStorage.setItem("reloadWindow", JSON.stringify(false));
                  }}
                >
                  <SignOut />
                </IconButton>
              </Box>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <AntSwitch
              defaultChecked
              onChange={() => {
                onToggleMode();
              }}
            />
            <Avatar
              src={faker.image.avatar()}
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{
                cursor: "pointer",
              }}
            />
          </Stack>
        </Stack>
      </Box>
    );
  }
  
  export default SideBarMobile;
  