import React from 'react'
import CommentsIndexItem from './comments_index_item';

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { 
      destroyComment, makeComment, 
      updateComment, videoId } = this.props
    let comments = Object.values(this.props.comments)
    return (
      <div className="comments">
        <div className="comment-count">
          {comments.length} Comments
        </div>
        {/* <CommentForm 
          makeComment={makeComment} 
          videoId={videoId}
        /> */}
        {
          comments.reverse().map(comment => {
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