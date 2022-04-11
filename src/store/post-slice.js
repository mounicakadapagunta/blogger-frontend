import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "post",
    initialState: { posts: [], msg: null, singlePost: {}, categories: [] },
    reducers: {
        loadPosts(state, action) {
            state.posts = action.payload;
        },
        loadSinglePost(state, action) {
            state.singlePost = action.payload;
        },
        loadCategories(state, action) {
            state.categories = action.payload;
        },
    },
});

export const postAction = postSlice.actions;

export default postSlice;