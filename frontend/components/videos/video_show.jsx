import React from 'react';
import Header from '../home/header';
import CommentsIndex from '../comments/comments_index';
import CommentForm from '../comments/comments_form';
import Modal from '../modal/modal';
import { fas } from '@fortawesome/free-solid-svg-icons';

class VideoShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: false,
      // likes: this.props.likes,
      like: {
        likerId: currentUser.id,
        videoId: this.props.match.params.videoId,
        dislike: false
      }
    }
    this.handleLike = this.handleLike.bind(this);
  }
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId)
  }

  handleLike(e) {
    const currState = this.state.active
    this.setState({ active: !currState })
    this.props.createLike(this.state.like)
  }
  
  handleDislike(e) {
    const currState = this.state.like.dislike
    this.setState({ dislike: !currState })
    this.props.createLike(this.state)
  }
    
    render() {
      let thumbsUp = this.state.active ? (
        <i className="far fa-thumbs-up thumb active-thumb" onClick={this.updateLike} />
      ) : (
        <i className = "far fa-thumbs-up thumb" onClick = {this.handleLike} />
      )
      let no = 0;
      let yes = 0;
      this.props.likes.forEach(like => {
        if (like.dislike) {
          no += 1
        } else {
          yes += 1
        }
        
      })
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
                    <div className="likes-share">
                      <div className="up">
                        {thumbsUp}
                        {/* <i
                          className="far fa-thumbs-up thumb"
                          onClick={this.handleLike}
                        ></i> */}
                        <div>{yes}</div>
                      </div>
                      <div className="down">
                        <div>
                          <i 
                            id="thumbs-down"
                            className="far fa-thumbs-down thumb" 
                          ></i>
                        </div>
                        <div>{no}</div>
                      </div>
                      <div className="share">
                        <div>
                          <a href="https://www.linkedin.com/in/george-tsimis-a5986224/" 
                            target="blank"><i className="fas fa-share thumb"></i>
                          </a>
                        </div>
                        <div>
                          <a href="https://www.linkedin.com/in/george-tsimis-a5986224/" 
                            target="blank">SHARE
                          </a>
                        </div>  
                      </div>
                      <div className="save">
                        <div>
                          <a href="https://www.linkedin.com/in/george-tsimis-a5986224/">
                            <i className="fas fa-plus thumb"></i>
                          </a>
                        </div>
                        <div>
                          <a href="https://www.linkedin.com/in/george-tsimis-a5986224/" 
                            target="blank">SAVE
                          </a>
                        </div>
                      </div>
                    </div>
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