import React from 'react';
import Header from '../home/header';
import { Link } from 'react-router-dom';
import CommentsIndex from '../comments/comments_index';
import CommentForm from '../comments/comments_form';

class VideoShow extends React.Component {
  
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId)
  }
  
  render() {
    const { 
      video, destroyComment, 
      comments, action, comment
    } = this.props
    let videoId = this.props.match.params.videoId
    return (
      <div>
        <Header />
        <div className="video-show">
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
            <strong>
              {video.title}
            </strong>
            <br />
            [views] - [date uploaded] --- [likes/dislikes] - [share]
          </div>
          <hr />
          <div className="channel-desc">
            <div className="video-channel">
              <strong>
                {video.channel}
              </strong>
              <br />
              [subscribers]
            </div>
            <br />
            <div className="video-show-descr">
              {video.description}
            </div>
          </div>
        </div>
        <hr />
        <div className="comment-count">
          {comments.length} Comments
          &nbsp;&nbsp;
          <span className='sort-by'>
            SORT BY
          </span>
        </div>
        <div>
          <CommentForm
            comment={comment}
            action={action}
            videoId={videoId}
          />
          <CommentsIndex 
            comments={comments} 
            destroyComment={destroyComment}
            videoId={videoId}
          />
        </div>
      </div>
    )
  }
};

export default VideoShow;