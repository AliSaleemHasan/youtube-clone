import React, { useState, useEffect } from "react";
import Video from "./Video";
import "./Videos.css";
import axios from "./axios";
import requests from "./requests";

function Videos() {
  const [veds, setVeds] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.vedios);
      setVeds(request.data.items);
    }

    fetchData();
  }, []);
  return veds.length > 0 ? (
    <div className="videos">
      {veds.map((video) => (
        <Video
          key={video.id}
          ID={video.id}
          title={video.snippet.localized.title}
          channelname={video.snippet.channelTitle}
          pic={video.snippet.thumbnails?.medium}
          time={video.snippet.publishedAt}
          Iframe={video.player.embedHtml}
        />
      ))}
    </div>
  ) : (
    <div className="session__end">
      <h1>
        Sorry : there are limited number of requests from youtube api to exceed
        each day
      </h1>
      <h2>they are already exceeded!!</h2>
    </div>
  );
}

export default Videos;
