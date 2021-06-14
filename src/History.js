import React, { useState, useEffect } from "react";
import "./History.css";
import { useStateValue } from "./StateProvide";
import Video from "./Video";
function History() {
  const [{ watchedHistory }] = useStateValue();
  const [hasHistory, setHasHistory] = useState(false);

  useEffect(() => {
    if (watchedHistory.length !== 0) {
      setHasHistory(true);
    }
  }, [watchedHistory.length]);
  return !hasHistory ? (
    <div className="history">
      <dev className="history__empty">
        <h1>The History is Empty!!</h1>
      </dev>
    </div>
  ) : (
    <dev className="history__notEmpty">
      {watchedHistory?.map((video) => (
        <Video
          title={video.title}
          Iframe={video.Iframe}
          pic={video.pic}
          description={video.description}
          time={video.time}
          channelname={video.channelname}
          ID={video.ID}
        ></Video>
      ))}
    </dev>
  );
}

export default History;
