import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.comment
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.noComment = this.noComment.bind(this);
    this.cancelComment = this.cancelComment.bind(this);
  }

  update(e) {
    this.setState({ body: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state, this.props.videoId)
    this.setState({ body: ''})
  }

  noComment(e) {
    if (!this.props.currentUser) this.props.history.push('/signin')
  }

  cancelComment(e){
    this.setState({
      body: ''
    })
  }

  render() {
    return (
      <div className="comment-form">
        <form>
          <textarea 
            type="text" 
            placeholder="Add a public comment..." 
            value={this.state.body}
            onChange={this.update}
            onClick={this.noComment}
          />
          <div className="comment-btns">
            <p
              onClick={this.cancelComment} 
              className="cmt-cancel"
            >
              CANCEL
            </p>
            <button 
              className="cmt-btn"
              onClick={this.handleSubmit}
            >
              COMMENT
            </button>
          </div>
        </form>
      </div>
    )
  }
};

const mSTP = state => ({
  currentUser: state.session.currentUser
})

export default withRouter(connect(mSTP)(CommentForm));