import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false, 
    token: '', 
    isLoading: false,
}

const slice = createSlice({
    name: 'auth', 
    initialState, 
    reducers: {
        logIn(state, action) {
            state.isLoggedIn = action.payload.isLoggedIn; 
            state.token = action.payload.token;
        }, 
        signOut(state, action) {
            state.isLoggedIn = false; 
            state.token = ''; 
        }
    }
})

export default slice.reducer; 

// login

export function LoginUser(formValues){
    console.log(formValues); 
}