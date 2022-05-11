import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSelector } from "../../header/search/searchSlice";
import { loadSubreddit } from "./postsSlice";
import redditlogo from "../../../sitecontent/reddit-logo.png"
import redditup from "../../../sitecontent/redditup.png"
import comment from "../../../sitecontent/comment.png"
import {Divider, H1, H2, Image, IndPara, IndPost, IndStat, Icon, Post, PostWrapper, PostHeader, StatImg, Stats, SubImage, H1long, ATag } from './PostsStyle';

export const Posts = () => {
    const activeSub = useSelector(state => state.subreddits.activeSubreddit);
    const posts = useSelector(state => state.posts.posts);
    const subreddits = useSelector(state => state.subreddits.subreddits);
    const dispatch = useDispatch();
    const searchTerm = useSelector(inputSelector);
    const filteredPost = posts.filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))

    const filterToActive = subreddits.find((subreddit) => subreddit.url === activeSub);


    useEffect(() => {
        dispatch(loadSubreddit(activeSub))
    }, [dispatch, activeSub])

    const shortenNum = (num) => {
        const stringNum = String(num);
        let stringArray = [];
        for (let i = 0; i < stringNum.length - 3; i++) {
            stringArray.push(stringNum[i])
        }

        return stringArray.join('') + "k"
        
    }


    return(
        <Post>
            <PostHeader>
                {
                    filterToActive === undefined || filterToActive.header_img === null 
                    ? <SubImage src={redditlogo} alt="reddit logo"></SubImage>
                    : <SubImage src={filterToActive.header_img} alt="active subreddit header image"></SubImage> 
                }
                {
                    activeSub.length > 21 
                    ? <div><H1long>{activeSub}</H1long></div> 
                    : <div><H1>{activeSub}</H1></div> 
                }
                
            </PostHeader>
            {searchTerm === '' 
            ? posts.map(post => (
                post.stickied ? null : 
                    <ATag href={`https://www.reddit.com${post.permalink}`} target='_blank'>
                        <PostWrapper key={post.id} >
                            <IndPost>
                                <H2>{post.title}</H2>
                                <IndPara>{post.selftext.substring(0, 600) + (post.selftext.length > 600 ? "..." : "")}</IndPara>
                                {post.selftext.length > 600 ? <p>See full Post</p> : null }
                                <Image src={post.url} alt="image posted by reddit user" onError={(e) => e.target.style.display = "none"}/>
                            </IndPost>
                            <Stats>
                                <IndStat>
                                    {`u/${post.author}`}
                                </IndStat>
                                <Divider>
                                    |
                                </Divider>
                                <IndStat>
                                    <div>
                                            {post.ups > 1000 ? shortenNum(post.ups) : post.ups}
                                    </div>
                                    <Icon>
                                            <StatImg src={redditup} alt="up arrow"></StatImg>
                                    </Icon>
                                </IndStat>
                                <Divider>
                                    |
                                </Divider>
                                <IndStat>
                                        <div>
                                            {post.num_comments}
                                    </div>
                                    <Icon>
                                            <StatImg src={comment} alt="comment icon"></StatImg>
                                    </Icon>
                                </IndStat>
                            </Stats>
                        </PostWrapper>
                    </ATag>
                 ))
            : filteredPost.map(post => (
                post.stickied ? null : 
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.selftext.substring(0, 600) + (post.selftext.length > 600 ? "..." : "")}</p>
                    {post.selftext.length > 600 ? <p>See full Post</p> : null }
                    <img src={post.url} onError={(e) => e.target.style.display = "none"}/>
                </div> ))
        }
        </Post>
    )
}
