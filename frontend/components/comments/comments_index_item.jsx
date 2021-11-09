import React from 'react';

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    
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
              <label id="x" /><i className="fas fa-ellipsis-v dots"></i>
              <input htmlFor="x" type="checkbox" className="delete-input"/>
              <div className="trash" onClick={() => destroyComment(comment.id)}>
                <i className="fas fa-trash"></i>
                <button  className="trash-btn">Delete</button>
              </div>
            </div>
          </div>
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