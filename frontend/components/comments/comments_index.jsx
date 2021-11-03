import React from 'react'
import CommentForm from './comments_form';
import CommentsIndexItem from './comments_index_item';

class CommentsIndex extends React.Component {
  render() {
    // const { comments } = this.props.comments
    let comments = Object.values(this.props.comments)
    return (
      <div className="comments">
        <div className="comment-count">
          {comments.length} Comments - Sort By
        </div>
        <hr />
        <CommentForm />
        {
          comments.map(comment => <CommentsIndexItem
                                      key={comment.id} 
                                      comment={comment} 
                                  />
                      )
        }
      </div>
    )
  }
};

export default CommentsIndex;