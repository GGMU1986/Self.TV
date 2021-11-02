import React from 'react';
import Header from '../home/header';
import { Link } from 'react-router-dom'

class VideoShow extends React.Component {
  
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId)
  }
  
  render() {
    const { video } = this.props
    return (
      <div>
        <Link to="/">
          <Header />
        </Link>
        <h1>[VIDEO GOES HERE]</h1>
        <div className="video-show-title">
          {video.title}
        </div>
        <div className="video-show-descr">
          {video.description}
        </div>
        <div>
          [COMMENTS BELOW]
          <br /><br />
          {video.comment_ids}
        </div>
      </div>
    )
  }
};

export default VideoShow;