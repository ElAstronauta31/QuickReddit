import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSelector, setSearch } from "./searchSlice";
import { Input, SearchWrapper } from "./SearchStyle";

export const Search = () => {
    const value = useSelector(inputSelector);
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const dispatch = useDispatch();

    const onChange = (event) => {
        dispatch(setSearch(event.target.value))
    }

    return (
        <SearchWrapper>
                <Input placeholder={`Search recent posts in ${activeSub}`} onChange={onChange} value={value}></Input>
        </SearchWrapper>
    )
}
