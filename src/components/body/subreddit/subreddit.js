import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {changeActiveSub, isLoading, loadSubredditNames} from "./subredditSlice";
import { SubButton, SubList, SubTitle, SubredditWrapper, UnorderList, SubImage, SubName, DropDown } from "./SubredditStyle";
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
        <SubredditWrapper>
            <SubTitle>
                Top Subreddits
            </SubTitle>
            <UnorderList>
                {subreddits.map((item) => (
                    <SubButton key={item.display_name_prefixed} onClick={() => dispatch(changeActiveSub(item.display_name_prefixed))}>
                        <SubList key={item.id}>
                            {
                                item.header_img !== null ? <SubImage src={item.header_img}></SubImage> 
                                : <SubImage src={redditlogo}></SubImage>
                            }
                            
                            <SubName>{item.display_name_prefixed}</SubName> 
                        </SubList>
                    </SubButton>
                ))}
            </UnorderList>
            <DropDown>
                {subreddits.map((item) => (
                    <option key={item.id} onClick={() => dispatch(changeActiveSub(item.display_name_prefixed))}>{item.display_name_prefixed}</option>
                ))}
            </DropDown>
        </SubredditWrapper>
    )
}