import React from "react";
import { Link } from "react-router-dom";

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props)
    
    this.viewCount = this.viewCount.bind(this);
  }

  // this  needs to be updated in BE
  viewCount(e) {
    this.props.incViews(this.props.video.id);
  }

  render() {
    const { video } = this.props;
    
    // below a date function needs to be implemented here - use dateFns maybe?
    const timeNow = new Date()
    const oldTime = new Date(video.createdAt)
    const time = timeNow - oldTime
    const timeDays = Math.round(time / (1000 * 3600 * 24))
    const timeAgo = timeDays < 1 ? 'less than 1 day ago' : (
      timeDays === 1 ? '1 day ago' : `${timeDays} days ago`
    )
    return (
      <div className="video" onClick={this.viewCount}>
        <Link to={`/videos/${video.id}`}>
          <img className="index"src={video.photoUrl} /> 
        </Link>
        <Link to={`/videos/${video.id}`}>
          <div className="video-index-link title">
            {video.title}
            <div className="video-index-link channel">
              {video.uploader}
              <br />
              {this.props.video.views} views
              <span>&nbsp; <span className="bul">&#8226;</span> &nbsp;</span>
              {timeAgo}
            </div>
          </div>
        </Link>
      </div>
    )
  }
};

export default VideoIndexItem;