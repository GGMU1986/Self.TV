import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class VideoIndexItem extends React.Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.viewCount = this.viewCount.bind(this);
  }

  viewCount(e) {
    this.props.incViews(this.props.video.id);
  }

  render() {
    const { video } = this.props;
    const timeNow = new Date()
    const oldTime = new Date(video.createdAt)
    const time = timeNow - oldTime
    const timeDays = Math.round(time / (1000 * 3600 * 24))
    const timeAgo = timeDays < 1 ? 'today' : (
      timeDays === 1 ? '1 day ago' : `${timeDays} days ago`
    )
    return (
      <div className="video" onClick={this.viewCount}>
        <Link to={`/videos/${video.id}`}>
          <img src={video.photoUrl} />
        </Link>
        <Link to={`/videos/${video.id}`}>
          <div className="video-index-link title">
            {video.title}
            <div className="video-index-link channel">
              {video.channel}
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