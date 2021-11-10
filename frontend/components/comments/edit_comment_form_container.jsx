import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'

class EditCommentForm extends React.Component {
  componentDidMount() {
    this.props.requestComment(this.props.match.params.commentId)
  }

  render() {
    const { action, comment } = this.props;
    if (!comment) return null;
    return (
      <div className="edit">
        <CommentForm 
          action= {action}
          comment={comment}
        />
      </div>
    )
  }
};

const mSTP = (state, ownProps) => ({
  comment: state.entities.comments[ownProps.match.params.commentId]
});

const mDTP = dispatch => ({
  action: comment => dispatch(reviseComment(comment)),
  requestComment: commentId => dispatch(requestComment(commentId))
});

export default withRouter(connect(mSTP, mDTP)(EditCommentForm));