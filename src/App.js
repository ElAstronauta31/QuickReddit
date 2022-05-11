import React from "react";
import { Header } from "./components/header/header";
import { Subreddit } from "./components/body/subreddit/subreddit";
import { Post } from "./components/body/posts/posts";
import {MainWrapper, Wrapper} from "./AppStyle"

function App() {
  return (
    <Wrapper>
      <Header/>
      <MainWrapper>
          <Subreddit />
          <Post/>
      </MainWrapper>
    </Wrapper>
  );
}

export default App;
