import React from 'react';
import Header from '../home/header';
import CommentsIndex from '../comments/comments_index';
import CommentForm from '../comments/comments_form';
import Modal from '../modal/modal';

class VideoShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      likes: this.props.likes,
      dislikes: this.props.likes
    }
  }
  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId)
  }

  // handleLike(e) {
    
  // }

  // handleDislike(e) 
    
  // }
  
  render() {
    const { 
      video, destroyComment, 
      comments, action, comment
    } = this.props
    const uploadDate = new Date(video.createdAt).toString().slice(4, 15)
    let videoId = this.props.match.params.videoId
    // let yes = 0;
    // let no = 0;
    // let videoLikes = video.likes;
    // if (videoLikes) {
    //   videoLikes.forEach(like => {
    //     if (like.dislike) {
    //       return no += 1;
    //     } else {
    //       return yes += 1
    //     }
    //   })
    // } 
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
                        <i className="far fa-thumbs-up thumb"></i>
                        <div>0</div>
                      </div>
                      <div className="down">
                        <i className="far fa-thumbs-down thumb"></i>
                        <div>0</div>
                      </div>
                      <div className="share">

                        <i className="fas fa-share thumb"></i>
                        <div>
                          SHARE
                        </div>  
                      </div>
                      <div className="save">
                        <i className="fas fa-plus thumb"></i>
                        <div>
                          SAVE
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