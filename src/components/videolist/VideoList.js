import React from "react";
import Video from "../video/Video";
import "./videoList.css";
function VideoList({ videoItems, onVideoClick, display }) {
  return (
    <ul className="videolist">
      {videoItems.map((videoItem) => (
        <Video
          videoItem={videoItem}
          key={videoItem.etag}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
}
export default VideoList;
