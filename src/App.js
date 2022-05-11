import React from "react";
import { Header } from "./components/header/header";
import { Subreddit } from "./components/body/subreddit/subreddit";
import { Posts } from "./components/body/posts/posts";
import {MainWrapper, Wrapper} from "./AppStyle"

function App() {
  return (
    <Wrapper>
      <Header/>
      <MainWrapper>
          <Subreddit />
          <Posts/> 
      </MainWrapper>
    </Wrapper>
  );
}

export default App;
