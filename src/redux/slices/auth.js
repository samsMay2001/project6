import { createSlice } from "@reduxjs/toolkit";
import axios from '../../utils/axios';
import { dispatch } from "../store";


const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    signOut(state, action) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export default slice.reducer;

// login

export function LoginUser(formValues) {
  return async () => {
    await axios.post("/login", {...formValues}, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res)=> {
      dispatch(slice.actions.logIn({
        isLoggedIn: true, 
        token: res.data.token
      }))
    }).catch((err)=> {
      console.log(err)
    })
  };
}

export function logoutUser(){
  return async () => {
    dispatch(slice.actions.signOut())
  }
}