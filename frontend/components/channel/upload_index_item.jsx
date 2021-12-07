import React from 'react';
import { Link } from 'react-router-dom';

const UploadIndexItem = ({ video }) => {
  return (
    <div className="upload-index-item">
       <Link to={`/videos/${video.id}`}>
          <img className="index"src={video.photoUrl} /> 
        </Link>
        <Link to={`/videos/${video.id}`}>
          <div className="video-index-link title">
            {video.title}
            <div className="video-index-link channel">
              {video.uploader}
              <br />
              {video.views} views
              <span>&nbsp; <span className="bul">&#8226;</span> &nbsp;</span>
              {/* {timeAgo} */}
            </div>
          </div>
        </Link> 
    </div>
  )
};

export default UploadIndexItem;