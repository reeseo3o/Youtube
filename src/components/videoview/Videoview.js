import React from "react";
import "./Videoview.css";

export default function Videoview({ video }) {
  return (
    <div className="viewbox">
      {/* {props.video.snippet.channelTitle} */}
      <div className="playVideoBox">
        <iframe
          id="player"
          type="text/html"
          className="videoframe"
          title="비디오플레이어"
          src={`http://www.youtube.com/embed/${video.id}`}
        ></iframe>
      </div>
      <div className="txtcontainer">
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
