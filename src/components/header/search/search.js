import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSelector, setSearch } from "./searchSlice";

export const Search = () => {
    const value = useSelector(inputSelector);
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const dispatch = useDispatch();

    const onChange = (event) => {
        dispatch(setSearch(event.target.value))
    }

    return (
        <div>
            <input placeholder={`Search recent posts in ${activeSub}`} onChange={onChange} value={value}></input>
        </div>
    )
}
