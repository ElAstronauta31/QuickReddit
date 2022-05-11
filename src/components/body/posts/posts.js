import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSelector } from "../../header/search/searchSlice";
import { loadSubreddit } from "./postsSlice";

export const Post = () => {
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const posts = useSelector(state => state.posts.posts);
    const subreddits = useSelector(state => state.subreddits.subreddits);
    const dispatch = useDispatch();
    const searchTerm = useSelector(inputSelector);
    const filteredPost = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))


    useEffect(() => {
        dispatch(loadSubreddit(activeSub))
    }, [dispatch, activeSub])


    return(
        <div>
            <div>
                {

                }
            </div>
        </div>
    )
}
