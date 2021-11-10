import React from 'react';

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.addActiveClass = this.addActiveClass.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
  }

  // handleEdit(e) {
    
  // }

  addActiveClass(e) {
    const currState = this.state.active
    this.setState({
      active: !currState
    })
  }

  render () {
    const { comment, destroyComment, currentUser, updateComment, videoId } = this.props
    const timeNow = new Date()
    const oldTime = new Date(comment.createdAt)
    const time = timeNow - oldTime
    const timeDays = Math.round(time / (1000 * 3600 * 24))
    const timeAgo = timeDays < 1 ? 'less than 1 day ago' : (
      timeDays === 1 ? '1 day ago' : `${timeDays} days ago`
    )
    return (
      <div className="comments-index">
        <div className="comment-header">
          <div className='pic-commenter-time'>
            <div className="pic-circle">
              <span className="pic-text">{comment.commenter[0].toUpperCase()}</span>
            </div>
            <div className="commenter-time">
              <strong>{comment.commenter}</strong>
              &nbsp;&nbsp;
              <span className="time-ago">
                {timeAgo}
              </span>
            </div>
          </div>
          <div>
            <div className="delete-container">
              <i className="fas fa-ellipsis-v dots" onClick={this.addActiveClass}></i>
              <div 
                className={this.state.active ? "trash active" : "trash"} 
                onClick={() => destroyComment(comment.id)}
              > 
                <div>
                  <i className="fas fa-trash"></i>
                </div>
                <div>
                  <button  className="trash-btn">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment-body">
          {comment.body}
        </div>
      </div>
    //   <div className='comments-index'>
    //     <div className="pic-commenter">
    //       <div className="user-circle">
    //         {comment.commenter[0].toUpperCase()}
    //       </div>
    //       <div>
    //         <strong>{comment.commenter}</strong>
    //         &nbsp;&nbsp;
    //         <span className="time-ago">
    //           {timeAgo}
    //         </span>
    //       </div>
    //     </div>
    //     <div>
    //       {comment.body}
    //     </div>
    //     <div className="comment-drop-down">
    //       <div className="edit-delete-comment">
    //         <div className="delete-comment">
    //           <i className="fas fa-trash"></i>
    //         </div>
    //       </div>
    //     </div>
    //     <button onClick={() => destroyComment(comment.id)}>Delete</button>
    //     <br /><br />
    //   </div>
    )
  }
};

export default CommentsIndexItem;