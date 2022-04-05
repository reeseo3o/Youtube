import React from "react";
import "../App.css";
import Menubar from "../components/menubar/Menubar";
import VideoList from "../components/videolist/VideoList";
import Videoview from "../components/videoview/Videoview";

const Home = ({ selectView, videoItems, onVideoClick }) => {
  return (
    <div className="contents-wrap">
      <div className="sidebar">
        <Menubar />
      </div>
      <div className="content">
        <div className="list">
          <VideoList
            videoItems={videoItems}
            onVideoClick={onVideoClick}
            display="collist"
          />
        </div>
      </div>
      {/* end : content */}
    </div>
  );
};

export default Home;
