import { createSlice } from '@reduxjs/toolkit';

//This is the state that we will store in global state. so this can be used anywhere in the application, 
//don't have to pass the state and properties.
const initialState = {
    mode: 'light',
    user: null,
    token: null,
    posts: [],
}

