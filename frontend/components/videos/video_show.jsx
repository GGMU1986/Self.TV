import React from 'react';
import Header from '../home/header';
import CommentsIndex from '../comments/comments_index';
import CommentForm from '../comments/comments_form';
import Modal from '../modal/modal';
import VideoShowSide from './video_show_side';
import VideoLikes from '../likes/likes';

class VideoShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      subbed: this.subbed(),
      subCount: this.props.subCount
    }
    this.handleSub = this.handleSub.bind(this);
    this.findSubId = this.findSubId.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.props.fetchVideo(this.props.match.params.videoId)
    } 
  }

  subbed(){
    for (let i = 0; i < this.props.subbedTo.length; i++){
      if (this.props.subbedTo[i].id === this.props.video.uploaderId){
        return true
      }
    }
    return false
  }
  
  findSubId(){
    let subId;
    for (let i = 0; i < this.props.subs.length; i++){
      if (this.props.subs[i].userId === this.props.video.uploaderId &&
        this.props.subs[i].subscriberId === this.props.currentUser.id){
          subId = this.props.subs[i].id
      }
    }
    return subId
  }

  handleSub(){
    if (this.state.subbed) {
      this.props.destroySub(this.findSubId(),this.props.video.uploaderId) 
      this.setState(prevState => ({
        subCount: prevState.subCount - 1, subbed: false
      }))
    } else {
      this.props.createSub(this.props.video.uploaderId)
      this.setState(prevState => ({
        subCount: prevState.subCount + 1, subbed: true
      }))
    }
  }

    render() {
      const { 
        video, destroyComment,
        comments, action, comment
      } = this.props
      const subBtn = this.state.subbed ? (
        <button onClick={this.handleSub} className="subbed">SUBSCRIBED</button>
        ) : (
          <button onClick={this.handleSub} className="sub">SUBSCRIBE</button>
          )

    const uploadDate = new Date(video.createdAt).toString().slice(4, 15)
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
                  className="video-cont"
                  src={video.videoUrl}   
                  title={video.title}
                  autoPlay
                  controls
                  muted
                />
              </div>
              <div className="video-show-title">
                <div className="video-title">
                  <strong>
                    {video.title}
                  </strong>
                  <br />
                  <div className="views-likes-share">
                    <div className="views-upload-date">
                      {video.views} views &#8226; {uploadDate}
                    </div>
                  </div>
                </div>
                <div>
                  <VideoLikes />
                </div>
              </div>
              <hr />
              <div className="channel-desc">
                <div className="video-channel">
                  <strong>
                    {video.channel}
                  </strong>
                  <br />
                  {this.state.subCount} subscribers
                </div>
                <br />
                <div className="video-show-descr">
                  {video.description}
                </div>
                {subBtn}
              </div>
            </div>
            <hr />
            <div className="comment-count">
              {comments.length === 1 ? `${comments.length} Comment` : `${comments.length} Comments`}
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
              />
            </div>
          </div>
          <div className="related-videos-cont">
            <VideoShowSide videoId={videoId} />
          </div>
        </div>
      </div>
    )
  }
};

export default VideoShow;