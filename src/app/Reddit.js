export const API_ROOT = 'https://www.reddit.com';

export const getPosts = async (subreddit) => {
    const respose = await fetch(`${API_ROOT}${subreddit}.json`);
    const json = await respose.json();
    const data = json.data.children.map((post) => post.data);

    return data
}

export const getSubreddits = async () => {
    const respose = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await respose.json();
    const data = json.data.children.map((subreddit) => subreddit.data);
    
    return data
}
