import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer