import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import authSlice from "./auth-slice";
import postSlice from "./post-slice.js";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        post: postSlice.reducer,
    },
});

export default store;