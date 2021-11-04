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
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={() => destroyComment(comment.id)}>Delete</button>
        <br />
      </div>
    )
  }
};

export default CommentsIndexItem;