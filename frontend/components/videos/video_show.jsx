import React from 'react';
import Header from '../home/header';
import { Link } from 'react-router-dom';
import CommentsIndex from '../comments/comments_index';
import CommentForm from '../comments/comments_form';
import Modal from '../modal/modal';

class VideoShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      views: this.props.video.views
    }
  }
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId)
  }

  viewCount(e) {
    this.props.incViews()
  }
  
  render() {
    const { 
      video, destroyComment, 
      comments, action, comment
    } = this.props
    const uploadDate = new Date(video.createdAt).toString().slice(4, 15)
    debugger
    let videoId = this.props.match.params.videoId
    return (
      <div className="video-show-cont">
        <Modal />
        <Header />
        <div className="show-page">
          <div className="video-show">
            <div>
              <div className="video-show-container">
                <video
                  onClick={this.viewCount} 
                  className="video-cont"
                  src={video.videoUrl}   
                  title={video.title}
                  controls
                />
              </div>
              <div className="video-show-title">
                <div className="video-title">
                  <strong>
                    {video.title}
                  </strong>
                  <br />
                  {this.state.views} views &#8226; {uploadDate}
                </div>
                <div className="likes-cont">
                  <div className="video-show-likes">
                    <i className="far fa-thumbs-up"></i>
                    [like-count]
                  </div>
                  <div className="video-show-dislikes">
                    <i className="far fa-thumbs-down"></i>
                    [dislike-count]
                  </div>
                </div> 
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
                <button className="sub">SUBSCRIBE</button>
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
          <div className="related-videos-cont">

          </div>
        </div>
      </div>
    )
  }
};

export default VideoShow;