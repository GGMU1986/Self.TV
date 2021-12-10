import React from 'react';
import Header from '../home/header';
import CommentsIndex from '../comments/comments_index';
import CommentForm from '../comments/comments_form';
import Modal from '../modal/modal';
import VideoShowSide from './video_show_side';
import VideoLikes from '../likes/likes';
import { faRoute } from '@fortawesome/free-solid-svg-icons';

class VideoShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      like: {
        likerId: '',
        videoId: this.props.match.params.videoId,
        dislike: false
      }
    }
    this.handleLike = this.handleLike.bind(this);
  }
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId)
    this.props.fetchUser(this.props.currentUser.id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      this.props.fetchVideo(this.props.match.params.videoId)
    } 
  }

  subbed(){
    for (let i = 0; i < this.props.subs.length; i++){
      if (this.props.subs[i].id === this.props.video.uploaderId){
        return true
      }
    }
    return false
  }

  handleLike(e) {
    const currDislike = this.state.like.dislike
    const currState = this.state.active
    this.setState({ active: !currState, dislike: !currDislike })
    this.props.createLike(this.state.like)
  }
  
  handleDislike(e) {
    const currState = this.state.like.dislike
    this.setState({ dislike: !currState })
    this.props.createLike(this.state.like)
  }

  updateLike(e) {
    this.setState({ dislike: null })
    this.props.updateLike(this.state.like)
  }
    
    render() {
      console.log(this.subbed())
      // console.log(this.props.subs)
      // console.log(this.props.video.uploaderId)
      const subBtn = this.subbed() ? (
        <button onClick={() => this.handleSub} className="subbed">SUBSCRIBED</button>
        ) : (
        <button onClick={() => this.handleSub} className="sub">SUBSCRIBE</button>
      )

      const { 
      video, destroyComment, 
      comments, action, comment
    } = this.props
    
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
                  {video.uploaderSubs} subscribers
                </div>
                <br />
                <div className="video-show-descr">
                  {video.description}
                </div>
                {/* <button className="sub">SUBSCRIBE</button> */}
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
                videoId={videoId}
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