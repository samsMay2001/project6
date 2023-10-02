import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "../store";

const initialState = {
    sidebar: {
        open: false,
        type: "CONTACT", // can be CONTACT, STARRED, SHARED
    }
}

const slice = createSlice({
    name: 'app', 
    initialState, 
    reducers: {
        // toggle sidebar
        toggleSidebar(state, action) {
            state.sidebar.open = !state.sidebar.open; 
        }, 
        updateSidebarType(state, action) {
            state.sidebar.type = action.payload.type
        }
    }
})

// Reducer
export default slice.reducer 

// toggling
export function ToggleSidebar () {
    return async () => {
        await dispatch(slice.actions.toggleSidebar())
        // console.log('a')

    }
}
export function UpdateSidebarType (type) {
    return async () => {
        dispatch(
            slice.actions.updateSidebarType({type})
        )
    }
}