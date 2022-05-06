import { configureStore } from "@reduxjs/toolkit";
import subredditSlice from "../components/body/subreddit/subredditSlice";

const store = configureStore({
    reducer: {
        subreddits: subredditSlice
    }
})

export default store
