import React from "react";
import { Link } from "react-router-dom";

const VideoIndexItem = ({ video }) => {
  return (
    <Link to={`/videos/${video.id}`} >
      <h3>Thumbnail {video.id}</h3>
      <div>
        {video.title}
      </div>
    </Link>
  )
};

export default VideoIndexItem;