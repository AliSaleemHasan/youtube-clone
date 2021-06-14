import React, { useEffect, useState } from "react";
import "./Search.css";
import { useStateValue } from "./StateProvide";
import Video from "./Video";

function Search() {
  const [{ searchOutput }] = useStateValue();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(searchOutput?.data?.items);
  }, [searchOutput]);

  return (
    <div className="search">
      {videos?.map((video) => (
        <Video
          key={video.id.videoId}
          ID={video.id.videoId}
          search
          channelname={video.snippet.channelTitle}
          title={video.snippet.title}
          time={video.snippet.publishTime}
          pic={video.snippet.thumbnails?.medium}
          description={video.snippet.description}
        />
      ))}
    </div>
  );
}

export default Search;
