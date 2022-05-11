import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../components/body/posts/postsSlice";
import subredditSlice from "../components/body/subreddit/subredditSlice";
import searchSlice from "../components/header/search/searchSlice";

const store = configureStore({
    reducer: {
        subreddits: subredditSlice,
        posts: postsSlice, 
        search:searchSlice
    }
})

export default store
