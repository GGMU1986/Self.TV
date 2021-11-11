import React from 'react';

class VideoLikes extends React.Component {
  render() {
    return (
      <div className="likes-share-container">
        <div className="likes-container">
          <div className="ikon">
            <i className="fas fa-thumbs-up"></i>
          </div>
          <div className="ikon2">
            0
          </div>
          <div className="ikon">
            <i className="fas fa-thumbs-down"></i>
          </div>
          <div className="ikon2">
            0
          </div>
        </div>
        <div className="share-container">
          <div className="ikon">
            <i className="fas fa-share"></i>
          </div>
          <div className="ikon2">
            SHARE
          </div>
          <div className="ikon">
            <i className="fas fa-plus"></i>
          </div>
          <div className="ikon2">
            SAVE
          </div>
        </div>
      </div>
    )
  }
} 

export default VideoLikes;