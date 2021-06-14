import loadable from "react-loadable";
import React from "react";
const Loading = ({ error, timeOut, retry }) => {
  if (error)
    return (
      <div className="page__center">
        <h1>Error : {error}</h1>
        <button onClick={retry}>relaod </button>
      </div>
    );
  else if (timeOut)
    return (
      <div className="page__center">
        <h1>Taking a long Time ...</h1>
        <button onClick={retry}>relaod </button>
      </div>
    );
  else
    return (
      <div className="page__center">
        <h1>Loading...</h1>
      </div>
    );
};

export const LoadableHeader = loadable({
  loader: () => import(/* webpackChunkName: "Login" */ "./Header"),
  loading: Loading,
  timeout: 10000,
});
export const LoadableHistory = loadable({
  loader: () => import(/* webpackChunkName: "sidebar" */ "./History"),
  loading: Loading,
  timeout: 10000,
});

export const LoadableSearch = loadable({
  loader: () => import(/* webpackChunkName: "settings" */ "./Search"),
  loading: Loading,
  timeout: 10000,
});

export const LoadableSidebar = loadable({
  loader: () => import(/* webpackChunkName: "settings" */ "./Sidebar"),
  loading: Loading,
  timeout: 10000,
});

export const LoadableSidebarRow = loadable({
  loader: () => import(/* webpackChunkName: "settings" */ "./SidebarRow"),
  loading: Loading,
  timeout: 10000,
});
export const LoadableVideo = loadable({
  loader: () => import(/* webpackChunkName: "settings" */ "./Video"),
  loading: Loading,
  timeout: 10000,
});
export const LoadableVideoPlayer = loadable({
  loader: () => import(/* webpackChunkName: "settings" */ "./VideoPlayer"),
  loading: Loading,
  timeout: 10000,
});

export const LoadableVideos = loadable({
  loader: () => import(/* webpackChunkName: "settings" */ "./Videos"),
  loading: Loading,
  timeout: 10000,
});
