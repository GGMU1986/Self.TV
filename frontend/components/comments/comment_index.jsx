import React from 'react'
import { connect } from 'react-redux';

class CommentsIndex extends React.Component {
  render() {
    const { comments } = this.props.video
    return (
      <div className="comments">
        <CommentForm />
        {
          comments.map(comment => <CommentIndexItem />)
        }
      </div>
    )
  }
};

// const mSTP = state => ({
//   comments: state.entities.videos.comments
// });

const mDTP = dispatch => ({
  
});

export default connect(null, mDTP)(CommentsIndex)