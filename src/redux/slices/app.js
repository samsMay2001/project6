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
  chatList: [],
  chatTab: 0,
  requests: [],
  chat_type: null,
  room_id: null,
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
    selectConversation(state, action) {
      state.chat_type = "individual";
      state.room_id = action.payload.room_id;
    },
    getChatList(state, action) {
      state.chatList = action.payload.chatList;
    },
    setNewChat(state, action) {
      state.chatList.unshift(action.payload.user);
    },
    resetAppState(state, action) {
      state.sidebar.open = false;
      state.sidebar.type = "CONTACT";
      state.users = [];
      state.friends = [];
      state.requests = [];
      state.chat_type = null;
      state.room_id = null;
      state.chatList = [];
    },
    setChatTab(state, action) {
      state.chatTab = action.payload.tab;
    },
  },
});

// Reducer
export default slice.reducer;
// changing chatTabs
export function setChatTab(tab) {
  // console.log(tab);
  return (dispatch, getState) => {
    dispatch(slice.actions.setChatTab({ tab }));
  };
}

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
        dispatch(slice.actions.updateFriends({ friends: res.data.data }));
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

export function resetAppState() {
  return (dispatch, getState) => {
    dispatch(slice.actions.resetAppState({}));
  };
}

export function selectConversation(room_id) {
  return (dispatch, getState) => {
    dispatch(slice.actions.selectConversation({ room_id }));
  };
}

export function getChatList(_id) {
  return async (dispatch, getState) => {
    await axios.post("url", {
      _id: _id,
    });
  };
}
export function newChat(user) {
  return (dispatch, getState) => {
    dispatch(slice.actions.setNewChat({ user }));
  };
}
