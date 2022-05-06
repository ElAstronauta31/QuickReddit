import React from "react";
import { createSlice } from '@reduxjs/toolkit';

const subredditSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [],
        activeSubreddit: "/r/meme/"
    },
    reducers: {
        changeActiveSub: (state, action) => {
            state.activeSubreddit = `/${action.payload}/`
        }
    }
})

export default subredditSlice.reducer;
export const {changeActiveSub} = subredditSlice.actions;