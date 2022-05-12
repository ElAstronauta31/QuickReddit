import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import redditlogo from '../../sitecontent/reddit-logo.png';
import { Button, HeaderWrapper, SubImage } from './HeaderStyle';
import { changeActiveSub } from '../body/subreddit/subredditSlice'
import { Search } from "./search/search";

export const Header = () => {
    const dispatch = useDispatch();
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);

    const onClick = () => {
        dispatch(changeActiveSub('r/meme'))
        if (document.getElementById("selectBox").value === null){
            return
        } else if (activeSub !== document.getElementById("selectBox").value ) {
            document.getElementById("selectBox").selectedIndex = 0;
        }
    }

    return(
        <HeaderWrapper>
            <SubImage src={redditlogo} alt="reddit logo"></SubImage>
            <Button onClick={onClick}>
                QuickReddit
            </Button>

            <Search />
            
        </HeaderWrapper>
    )
}
