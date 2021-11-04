import React from "react";
import { Link } from "react-router-dom";

const VideoIndexItem = ({ video }) => {
  return (
    <Link to={`/videos/${video.id}`} >
      <div className="video-index">
        <img src={video.photoUrl} width="300" heigth="300" />
      </div>
      <div>
        {video.title}
      </div>
    </Link>
  )
};

export default VideoIndexItem;