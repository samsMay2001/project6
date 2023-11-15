import { createSlice } from "@reduxjs/toolkit";
import axios from '../../utils/axios';

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
      console.log(res)
    }).catch((err)=> {
      console.log(err)
    })
  };
}
