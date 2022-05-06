import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {changeActiveSub, isLoading, loadSubredditNames} from "./subredditSlice";
import redditlogo from '../../../sitecontent/reddit-logo.png';

export const Subreddit = () => {
    const subreddits = useSelector(state => state.subreddits.subreddits);
    const isLoadingSub = useSelector(isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSubredditNames())
    }, [dispatch])

    if (isLoadingSub) {
        return <div>LOADING</div>
    }

    return (
        <div>
            <h1>Top Subreddits</h1>
            <ul>
                {
                    subreddits.map((item) => (
                        <button key={item.display_name_prefixed} onClick={() => dispatch(changeActiveSub(item.display_name_prefixed))}>
                            <li key= {item.id}>
                                {
                                    item.header_img !== null ? <img src={item.header_img}></img>
                                    : <img src={redditlogo}></img>
                                }
                                <h2>{item.display_name_prefixed}</h2>
                            </li>
                        </button>
                    ))
                }
            </ul>

        </div>
    )
}