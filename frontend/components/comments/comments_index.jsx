import React from 'react'
import CommentForm from './comments_form';
import CommentsIndexItem from './comments_index_item';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props)
    debugger
  }
  componentDidMount() {
    debugger
  }
  render() {
    debugger
    const { destroyComment } = this.props
    let comments = Object.values(this.props.comments)
    return (
      <div className="comments">
        <div className="comment-count">
          {comments.length} Comments - Sort By
        </div>
        <hr />
        <CommentForm />
        {
          comments.map(comment => {
            if (comment) {
              return <CommentsIndexItem
                key={comment.id}
                comment={comment}
                destroyComment={destroyComment}
              />
            }
          }
        )
        }
      </div>
    )
  }
};

export default CommentsIndex;