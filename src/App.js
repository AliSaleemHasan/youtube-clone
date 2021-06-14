import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Search";
import VideoPlayer from "./VideoPlayer";
import History from "./History";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchtitle">
            <div className="app__body">
              <Sidebar />
              <Search />
            </div>
          </Route>

          <Route path="/video/:videoId">
            <VideoPlayer />
          </Route>

          <Route path="/history">
            <History />
          </Route>
          <Route path="/">
            <div className="app__body">
              <Sidebar />
              <Videos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
