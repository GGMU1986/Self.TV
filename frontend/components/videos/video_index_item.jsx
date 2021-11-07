import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { video } = this.props;
    const date = new Date(video.createdAt).toString().slice(4,15)
    return (
      <div className="video">
        <Link to={`/videos/${video.id}`}>
          <img src={video.photoUrl} />
        </Link>
        <Link to={`/videos/${video.id}`}>
          <div className="video-index-link title">
            {video.title}
            <div className="video-index-link channel">
              {video.channel}
              <br />
              [views]
              <span>&nbsp; &#183; &nbsp;</span>
              {date}
            </div>
          </div>
        </Link>
      </div>
    )
  }
};

export default VideoIndexItem;