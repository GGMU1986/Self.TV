import React from 'react';
import Header from '../home/header';
import { Link } from 'react-router-dom';
import CommentsIndex from '../comments/comments_index';

class VideoShow extends React.Component {
  
  componentDidMount() {
    // debugger
    this.props.fetchVideo(this.props.match.params.videoId)
  }
  
  render() {
    // debugger
    const { 
      video, destroyComment, 
      comments, updateComment, makeComment 
    } = this.props
    let videoId = this.props.match.params.videoId
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
        <hr />
        <div>
          <CommentsIndex 
            comments={comments} 
            destroyComment={destroyComment}
            updateComment={updateComment}
            makeComment={makeComment}
            videoId={videoId}
          />
        </div>
      </div>
    )
  }
};

export default VideoShow;