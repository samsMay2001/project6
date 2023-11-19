import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FetchFriends, FetchRequests, FetchUsers } from "../../redux/slices/app";
import { dispatch } from "../../redux/store";
import { Button, Stack, Tab, Tabs, useTheme } from "@mui/material";

export function AddFriends() {
  const {friends, users} = useSelector((state)=> state.app )
  const {_id} = useSelector((state) => state.auth)
  const [tab, setTab] = useState(0)
  const theme = useTheme()
  function handleChange(event, value){
    setTab(value)
  }
  useEffect(() => {
    dispatch(FetchUsers(friends, _id))
  }, []);
  return (
    <div>
      <Stack sx={{width: "100%"}} direction={'row'} spacing={2}>
        <Button sx={{
          backgroundColor:  tab === 0 ? (theme.palette.mode ==="light" ? "rgb(0,0,0,.06)" : "#36414E") : "rgb(0, 0, 0, 0)",
          color: theme.palette.mode ==="light" ? '#000' : "rgba(255, 255, 255, 0.8)",
          '&:hover': {
            backgroundColor: theme.palette.mode === "light" ? 'rgb(0,0,0,.06)' : '#333E4A', // Change to the desired hover color
          }
        }} onClick={()=> {setTab(0)}}>Explore</Button>
        <Button sx={{
          backgroundColor:  tab === 1 ? (theme.palette.mode ==="light" ? "rgb(0,0,0,.06)" : "#36414E") : "rgb(0, 0, 0, 0)",
          color: theme.palette.mode ==="light" ? '#000' : "rgba(255, 255, 255, 0.8)",
          '&:hover': {
            backgroundColor: theme.palette.mode === "light" ? 'rgb(0,0,0,.06)' : '#333E4A', // Change to the desired hover color
          }
        }} onClick={()=> {setTab(1)}}>Requests</Button>
      </Stack>
      {(users && tab === 0) && users.map((item, index)=> (
        <User index={index} />
      ))}
      {tab === 1 && <FriendRequests/>}
    </div>
  );
}

export function FriendRequests() {
  const { requests} = useSelector((state)=> state.app )
  const {_id} = useSelector((state) => state.auth)
  useEffect(()=> {
    dispatch(FetchRequests(_id))
  }, [])
  return <div>Friend Requests</div>;
}

export function User({index}) {
  return (
    <div>User {index+1}</div>
  )
}
