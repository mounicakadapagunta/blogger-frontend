import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { message: null, status: null, isLoading: false, user: [] },
    reducers: {
        loadUser(state, action) {
            state.user = action.payload.user;
        },
        showNotification(state, action) {
            state.message = action.payload.message;
            state.status = action.payload.status;
            state.isLoading = action.payload.isLoading;
        },
        setLoading(state, action) {
            state.isLoading = true;
            state.message = action.payload.message;
        },
        clearNotification(state, action) {
            state.message = null;
            state.status = null;
            state.isLoading = false;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;