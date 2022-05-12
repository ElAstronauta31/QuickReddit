import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSubreddits } from "../../../app/Reddit";

export const loadSubredditNames = createAsyncThunk(
    "subreddits/loadSubreddit",
    async () => {
        const response = await getSubreddits() 

        return response
    }
)



const subredditSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [],
        activeSubreddit: "/r/meme/",
        isLoading: false
    },
    reducers: {
        changeActiveSub: (state, action) => {
            state.activeSubreddit = `/${action.payload}/`
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadSubredditNames.pending, (state) => {
            state.isLoading = true
        })
        .addCase(loadSubredditNames.fulfilled, (state, action) => {
            state.isLoading = false
            state.subreddits = action.payload
        })
        .addCase(loadSubredditNames.rejected, (state) => {
            state.isLoading = false
        })
    }
})

export const isLoading = (state) => state.subreddits.isLoading;
export default subredditSlice.reducer;
export const {changeActiveSub} = subredditSlice.actions;