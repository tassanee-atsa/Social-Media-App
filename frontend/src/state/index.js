import { createSlice } from '@reduxjs/toolkit';

//This is the state that we will store in global state. so this can be used anywhere in the application, 
//don't have to pass the state and properties.
const initialState = {
    mode: 'light',
    user: null,
    token: null,
    posts: [],
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === 'light'?  'dark' : 'light'
        }, 
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },

        setLogout: (state) => {
            state.user = null;
            state.token = null;
        }
    }
})