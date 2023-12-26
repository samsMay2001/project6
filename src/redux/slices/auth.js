import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { dispatch } from "../store";
import getChatList from "./app";

const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
  errorMessage: "",
  firstname: "",
  lastname: "",
  _id: "",
  currentChat: 0,
  oldChat: 0,
  messageSentToggle: false // this is to always allow the code that needs to run on the "message-sent" event to run
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
      state.errorMessage = action.payload.errorMessage;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state._id = action.payload._id;
      state.currentChat = action.payload.currentChat
    },
    signOut(state=initialState, action) {
      return {...initialState}
    },
    resetErrorMessage(state, action) {
      state.errorMessage = "";
    },
    setCurrentChat(state, action) {
      state.currentChat = action.payload.currentChat
    },
    setMessageSentToggle(state, action) {
      state.messageSentToggle = !state.messageSentToggle
    }
  },
});

export default slice.reducer;

// login

export function LoginUser(formValues) {
  return async () => {
    await axios
      .post(
        "/login",
        { ...formValues },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((res) => {
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: res.data.token,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            _id: res.data._id,
            currentChat: res.data.currentChat
          }),
        );
      })
      .catch((err) => {
        dispatch(
          slice.actions.logIn({
            errorMessage: err.response.data.message,
          }),
        );
        // console.log(err.response.data.message)
      });
  };
}

export function logoutUser() {
  return async () => {
    dispatch(slice.actions.signOut());
  };
}

export function resetErrorMessage() {
  return async () => {
    dispatch(slice.actions.resetErrorMessage());
  };
}

export function createUser(formValues) {
  return async () => {
    await axios
      .post(
        "/newuser",
        { ...formValues },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((res) => {
        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: res.data.token,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            _id: res.data._id,
          }),
        );
      })
      .catch((err) => {
        dispatch(
          slice.actions.logIn({
            errorMessage: err.response.data.error,
          }),
        );
      });
  };
}
export function setCurrentChat(currentChat){
  return ()=> {
    dispatch(slice.actions.setCurrentChat({currentChat: currentChat}))
  }
}
export function setMessageSentToggle(){
  return ()=> {
    dispatch(slice.actions.setMessageSentToggle())
  }
}