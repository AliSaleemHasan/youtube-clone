import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  LoadableHeader,
  LoadableHistory,
  LoadableSearch,
  LoadableSidebar,
  LoadableVideos,
  LoadableVideoPlayer,
} from "./loadable";
function App() {
  return (
    <div className="app">
      <Router>
        <LoadableHeader />
        <Switch>
          <Route path="/search/:searchtitle">
            <div className="app__body">
              <LoadableSidebar />
              <LoadableSearch />
            </div>
          </Route>

          <Route path="/video/:videoId">
            <LoadableVideoPlayer />
          </Route>

          <Route path="/history">
            <LoadableHistory />
          </Route>
          <Route path="/">
            <div className="app__body">
              <LoadableSidebar />
              <LoadableVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
