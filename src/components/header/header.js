import React from "react";
import { useDispatch } from "react-redux"; 
import redditlogo from '../../sitecontent/reddit-logo.png';
import { Button, HeaderWrapper, SubImage } from './HeaderStyle';
import { changeActiveSub } from '../body/subreddit/subredditSlice'
import { Search } from "./search/search";

export const Header = () => {
    const dispatch = useDispatch();
    return(
        <HeaderWrapper>
            <SubImage src={redditlogo} alt="reddit logo"></SubImage>
            <Button onClick={() => dispatch(changeActiveSub('r/meme')) }>
                QuickReddit
            </Button>

            <Search />
            
        </HeaderWrapper>
    )
}
