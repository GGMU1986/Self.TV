import React from 'react';

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    
  }

  render () {
    const { comment, destroyComment, updateComment, videoId } = this.props
    const timeNow = new Date()
    const oldTime = new Date(comment.createdAt)
    const time = timeNow - oldTime
    const timeDays = Math.round(time / (1000 * 3600 * 24))
    const timeAgo = timeDays < 1 ? 'today' : (
      timeDays === 1 ? '1 day ago' : `${timeDays} ago`
    )
    return (
      <div className='comments-index'>
        <div>
          <strong>{this.props.comment.commenter}</strong>
          &nbsp;
          <span className="time-ago">
            {timeAgo}
          </span>
        </div>
        <div>
          {comment.body}
        </div>
        <div className="comment-drop-down">
          <div className="edit-delete-comment">
            <div className="edit-comment">
              <i class="fas fa-pen"></i>
              <p>Edit</p>
            </div>
            <div className="delete-comment">
              <i class="fas fa-trash"></i>
              <p>Delete</p>
            </div>
          </div>
        </div>
        <button>Reply</button>
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={() => destroyComment(comment.id)}>Delete</button>
        <br /><br />
      </div>
    )
  }
};

export default CommentsIndexItem;