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
          <a href="https://www.linkedin.com/in/george-tsimis-a5986224/">
            <div className="ikon2">
              SHARE
            </div>
          </a>
          <div className="ikon">
            <i className="fas fa-plus"></i>
          </div>
          <a href="https://github.com/GGMU1986" target="blank">
            <div className="ikon2 save">
              SAVE
            </div>
          </a>
        </div>
      </div>
    )
  }
} 

export default VideoLikes;