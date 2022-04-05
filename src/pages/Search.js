import React from "react";
import "../App.css";
import Menubar from "../components/menubar/Menubar";
import VideoList from "../components/videolist/VideoList";
import Videoview from "../components/videoview/Videoview";

const Search = ({ selectView, videoItems, onVideoClick }) => {
  return (
    <div className="contents-wrap">
      <div className="sidebar">
        <Menubar />
      </div>
      <div className="content">
        {selectView && (
          <div className="view">
            <Videoview video={selectView} />
          </div>
        )}
        <div className="list">
          <VideoList
            videoItems={videoItems}
            onVideoClick={onVideoClick}
            display="rowlist"
          />
        </div>
      </div>
      {/* end : content */}
    </div>
  );
};

export default Search;
