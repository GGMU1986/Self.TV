import React from "react";
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class SearchVideoItem extends React.Component {
  constructor(props) {
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
    const timeAgo = timeDays < 1 ? 'less than 1 day ago' : (
      timeDays === 1 ? '1 day ago' : `${timeDays} days ago`
    )
    return (
      <div className="search" onClick={this.viewCount}>
        <Link to={`/videos/${video.id}`}>
          <img className="search-view" src={video.photoUrl} />
        </Link>
        <Link to={`/videos/${video.id}`}>
          <div className="side-view-title search-title-container">
            {video.title}
            <div className="side-view-channel">
              {video.uploader}
              <br />
              {this.props.video.views} views
              <span>&nbsp; <span className="bul">&#8226;</span> &nbsp;</span>
              {timeAgo}
            </div>
            <div className="search-header-letter">
              <p>{video.uploader[0].toUpperCase()}</p> 
            </div>
            <div id="search-desc" className="side-view-channel">
              {video.description}
            </div>
          </div>
        </Link>
      </div>
    )
  }
};

export default withRouter(SearchVideoItem);