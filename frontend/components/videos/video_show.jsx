import React from 'react';
import Header from '../home/header';
import { Link } from 'react-router-dom'
import CommentsIndex from '../comments/comments_index';

class VideoShow extends React.Component {
  
  componentDidMount() {
    debugger
    this.props.fetchVideo(this.props.match.params.videoId)
  }
  
  render() {
    debugger
    const { video, comments, destroyComment } = this.props
    return (
      <div>
        <Link to="/">
          <Header />
        </Link>
        <hr />
        <div className="video-container">
          <h1>[VIDEO GOES HERE]</h1>
        </div>
        <div className="video-show-title">
          {video.title}
        </div>
        <hr />
        <div className="video-show-descr">
          {video.description}
        </div>
        <hr />
        <div>
          <CommentsIndex 
            comments={comments} 
            destroyComment={destroyComment}
          />
        </div>
      </div>
    )
  }
};

export default VideoShow;