import React from "react";
import "./VideoPlayer.css";
import YouTube from "react-youtube";
import { useStateValue } from "./StateProvide";
function VideoPlayer() {
  const [{ iframe }] = useStateValue();

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const _onReady = (e) => {
    e.target.pauseVideo();
  };
  return (
    <div className="videoPlayer">
      <YouTube videoId={iframe} opts={opts} onReady={_onReady} />
    </div>
  );
}

export default VideoPlayer;
