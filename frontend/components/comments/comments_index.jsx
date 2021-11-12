import React from 'react'
import CommentsIndexItem from './comments_index_item';
import { connect } from 'react-redux'

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
                // currentUser={currentUser ? currentUser : null}  
                comment={comment}
                destroyComment={destroyComment}
                // updateComment={updateComment}
                // videoId={videoId}
              />
            } else {
              return null;
            }
          } 
        )
        }
      </div>
    )
  }
};

const mSTP = state => ({
  currentUser: state.session.currentUser
});

export default connect(mSTP)(CommentsIndex);