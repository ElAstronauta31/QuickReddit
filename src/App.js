import React from "react";
import { Header } from "./components/header/header";
import { Subreddit } from "./components/body/subreddit/subreddit";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Subreddit/>
        {/* 
        <Posts/> */}
      </main>
    </div>
  );
}

export default App;
