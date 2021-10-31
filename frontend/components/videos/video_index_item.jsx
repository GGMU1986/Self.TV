import React from "react";
import { Link } from "react-router-dom";

const VideoIndexItem = ({ video }) => {
  return (
    <Link to={`/videos/${video.id}`} >
      <h3>Video {video.id}</h3>
      <div>
        {video.title}
      </div>
      <div>
        {video.description}
      </div>
    </Link>
  )
};

export default VideoIndexItem;