import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputSelector } from "../../header/search/searchSlice";
import { loadSubreddit } from "./postsSlice";
import redditlogo from "../../../sitecontent/reddit-logo.png"
import redditup from "../../../sitecontent/redditup.png"
import comment from "../../../sitecontent/comment.png"

export const Post = () => {
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
        <div>
            <div>
                {
                    filterToActive === undefined || filterToActive.header_img === null
                    ? <img src={redditlogo}></img>
                    : <img src={filterToActive.header_img}></img>
                }
                <h1>{activeSub}</h1>
            </div>
            {
                searchTerm === ''
                ? posts.map(post => (
                    post.stickied ? null :
                        <a>
                            <div key={post.id}>
                                <div>
                                    <h2>{post.title}</h2>
                                    <p>{post.selftext.substring(0, 600) + (post.selftext.length > 600 ? "..." : "")}</p>
                                    {post.selftext.length > 600 ? <p>See full Post</p> : null }
                                    <img src={post.url} onError={(e) => e.target.style.display = "none"}></img>
                                </div>
                                <div>
                                    <div>
                                        {`u/${post.author}`}
                                    </div>
                                    <div>
                                        |
                                    </div>
                                    <div>
                                        <div>
                                            {post.ups > 1000 ? shortenNum(post.ups) : post.ups}
                                        </div>
                                        <div>
                                            <img src={redditup}></img>
                                        </div>
                                    </div>
                                    <div>
                                        |
                                    </div>
                                    <div>
                                        <div>
                                            {post.num_comments}
                                        </div>
                                        <div>
                                            <img src={comment}></img>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </a>
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
        </div>
    )
}
