import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { dispatch } from "../store";

const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
  errorMessage: "",
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
      state.errorMessage = action.payload.errorMessage;
    },
    signOut(state, action) {
      state.isLoggedIn = false;
      state.token = "";
      state.errorMessage = "";
    },
    resetErrorMessage(state, action) {
      state.errorMessage = "";
    },
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
          }),
        );
      })
      .catch((err) => {
        dispatch(
          slice.actions.logIn({
            errorMessage: err.response.data.error,
          }),
        );
        // console.log(err.response.data.message)
      });
  };
}
