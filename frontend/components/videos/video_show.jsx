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
        <div>
          <div className="video-show-container">
            <video 
              width='70%'
              height='50%'
              src={video.videoUrl}   
              title={video.title}
              controls
            />
          </div>
          <div className="video-show-title">
            {video.title}
          </div>
          <div className="video-show-descr">
            {video.description}
          </div>
        </div>
      </div>
    )
  }
};

export default VideoShow;