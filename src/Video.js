import { Avatar } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { actionType } from "./reducer";
import { useStateValue } from "./StateProvide";
import "./Video.css";
function Video({
  ID,
  search,
  channelname,
  title,
  time,
  pic,
  description,
  Iframe,
}) {
  const history = useHistory();
  const [, dispatch] = useStateValue();
  const goToVideo = () => {
    dispatch({
      type: actionType.SET_VIDEO,
      iframe: ID,
      watched: { ID, channelname, title, time, pic, description, Iframe },
    });

    history.push(`/video/${ID}`);
  };
  return (
    <div onClick={goToVideo} className={`video ${search && "video__search"}`}>
      <img
        src={pic?.url}
        alt="video pic"
        width={pic?.width}
        height={pic?.height}
      />

      <div className="video__info">
        <Avatar className="video__avatar" />

        <div className="video__text">
          <h3>{title}</h3>
          <h4>{channelname}</h4>
          <p>{time}</p>
        </div>

        <div className="video__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Video;
