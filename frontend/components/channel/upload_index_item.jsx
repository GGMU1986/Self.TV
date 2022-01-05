import React from 'react';
import { Link } from 'react-router-dom';

const UploadIndexItem = ({ video, currentUser, deleteVideo }) => {
  const timeNow = new Date()
  const oldTime = new Date(video.createdAt)
  const time = timeNow - oldTime
  const timeDays = Math.round(time / (1000 * 3600 * 24))
  const timeAgo = timeDays < 1 ? 'less than 1 day ago' : (
    timeDays === 1 ? '1 day ago' : `${timeDays} days ago`
  )

  return (
    <div className="upload-index-item">
       <Link to={`/videos/${video.id}`}>
          <img className="upload-item"src={video.photoUrl} /> 
        </Link>
        <Link to={`/videos/${video.id}`}>
          <div className="video-index-link title">
            {video.title}
            <div className="video-index-link channel">
              {video.views} views
              <span>&nbsp; <span className="bul">&#8226;</span> &nbsp;</span>
              {timeAgo}
            </div>
          </div>
        </Link> 
        <div>
          <button 
            className="upload-delete-btn"
            onClick={() => deleteVideo(video.id)}
          >
            Delete
          </button>
        </div>
    </div>
  )
};

export default UploadIndexItem;