import React from 'react';

class CommentsIndexItem extends React.Component {
  render () {
    const { comment, destroyComment } = this.props
    return (
      <div>
        <div>
          <strong>{this.props.comment.commenter}</strong>
          -
          <span>{comment.createdAt}</span>
        </div>
        <br />
        <div>
          {comment.body}
        </div>
        <button>Reply</button>
        <button>Edit</button>
        <button onClick={() => destroyComment(comment.id)}>Delete</button>
        <br />
      </div>
    )
  }
};

export default CommentsIndexItem;