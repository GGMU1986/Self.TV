import React from 'react'
import CommentForm from './comments_form';
import CommentsIndexItem from './comments_index_item';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props)
    // debugger
  }
  componentDidMount() {
    // debugger
  }
  render() {
    // debugger
    const { 
      destroyComment, makeComment, 
      updateComment, videoId } = this.props
    let comments = Object.values(this.props.comments)
    return (
      <div className="comments">
        <div className="comment-count">
          {comments.length} Comments - Sort By
        </div>
        <hr />
        <CommentForm 
          makeComment={makeComment} 
          videoId={videoId}
        />
        {
          comments.map(comment => {
            if (comment) {
              return <CommentsIndexItem
                key={comment.id}
                comment={comment}
                destroyComment={destroyComment}
                updateComment={updateComment}
                videoId={videoId}
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