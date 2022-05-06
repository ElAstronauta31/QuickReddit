import React from "react";
import { useDispatch } from "react-redux"; 
import redditlogo from '../../sitecontent/reddit-logo.png';
import { Search } from "./search/search";

export const Header = () => {
    const dispatch = useDispatch();
    return(
        <div>
            <img src={redditlogo}></img>
            <button>
                QuickReddit
            </button>
            <Search />
        </div>
    )
}
