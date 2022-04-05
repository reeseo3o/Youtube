import React from "react";
import "./video.css";
import * as common from "../../common.js";
import { Link } from "react-router-dom";

function Video({ display, onVideoClick, videoItem }) {
  const container = "container";
  const displayClass = display === "rowlist" ? "list-h" : "list-v";
  return (
    <li className={`${container} ${displayClass}`}>
      <Link to='/watch'>
        <div className='video' onClick={() => onVideoClick(videoItem)}>
          <img
            className='thumbnail'
            src={videoItem.snippet.thumbnails.medium.url}
            alt='video thumbnail'
          />
          <div className='metadata'>
            <div className='channelImg'>
              <img
                className='small_thumbnail'
                src={videoItem.snippet.thumbnails.default.url}
                alt='video thumbnail'
              />
            </div>
            <div>
              <p className='title'>{videoItem.snippet.title}</p>
              <p className='channel'>{videoItem.snippet.channelTitle}</p>
              <p className='publishDate'>
                {common.publishDate(videoItem.snippet.publishedAt)}
              </p>
              {/* <p className="vidwNum">댓글{common.numberWithCommas(videoItem.statistics.commentCount)}회</p> */}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
export default Video;
