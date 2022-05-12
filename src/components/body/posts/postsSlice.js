import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../../app/Reddit";

export const loadSubreddit = createAsyncThunk(
    "subredditPost/loadPost",
    async (activeSub) => {
        const response = await getPosts(activeSub)
        return response
    }

)


const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadSubreddit.pending, (state) => {
            state.isLoading = true
        })
        .addCase(loadSubreddit.fulfilled, (state, action) => {
            state.isloading = false
            state.posts = action.payload
        })
        .addCase(loadSubreddit.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export default postsSlice.reducer;
