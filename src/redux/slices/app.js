import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { dispatch } from "../store";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can be CONTACT, STARRED, SHARED
  },
  users: [],
  friends: [],
  requests: [],
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // toggle sidebar
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    updateUsers(state, action) {
      state.users = action.payload.users;
    },
    updateFriends(state, action) {
      state.friends = action.payload.friends;
    },
    updateFriendRequests(state, action) {
      state.requests = action.payload.requests;
    },
  },
});

// Reducer
export default slice.reducer;

// toggling
export function ToggleSidebar() {
  return async () => {
    await dispatch(slice.actions.toggleSidebar());
    // console.log('a')
  };
}
export function UpdateSidebarType(type) {
  return async () => {
    dispatch(slice.actions.updateSidebarType({ type }));
  };
}

export function FetchUsers(userFriends, userId) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/users",
        {
          _id: userId,
          friends: userFriends,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        },
      )
      .then((res) => {
        dispatch(slice.actions.updateUsers({ users: res.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function FetchFriends(userId) {
  return async (dispatch, getState) => {
    await axios
      .post(
        "/friends",
        {
          _id: userId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        },
      )
      .then((res) => {
        // console.log(res);
        dispatch(slice.actions.updateUsers({ friends: res.data.data }));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export function FetchRequests(_id) {
  // not tested
  return async (dispatch, getState) => {
    await axios
      .post(
        "/requests",
        {
          _id: _id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getState().auth.token}`,
          },
        },
      )
      .then((res) => {
        dispatch(
          slice.actions.updateFriendRequests({ requests: res.data.data }),
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
