import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../components/body/posts/postsSlice";
import subredditSlice from "../components/body/subreddit/subredditSlice";

const store = configureStore({
    reducer: {
        subreddits: subredditSlice,
        posts: postsSlice
    }
})

export default store
