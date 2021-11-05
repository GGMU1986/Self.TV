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
          {comments.reverse().map(comment => {
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