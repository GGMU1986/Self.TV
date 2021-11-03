import React from 'react';

class CommentsIndexItem extends React.Component {
  render () {
    return (
      <div>
        <div>
          <span>{this.props.comment.commenter}</span>
          <span>{this.props.comment.createdAt}</span>
        </div>
        <div>
          {this.props.comment.body}
        </div>
      </div>
    )
  }
};

export default CommentsIndexItem;