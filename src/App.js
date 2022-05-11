import React from "react";
import { Header } from "./components/header/header";
import { Subreddit } from "./components/body/subreddit/subreddit";
import { Post } from "./components/body/posts/posts";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Subreddit/> 
        <Post/>
      </main>
    </div>
  );
}

export default App;
