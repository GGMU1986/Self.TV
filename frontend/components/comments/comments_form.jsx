import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      video_id: this.props.videoId,
      body: '' 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.noComment = this.noComment.bind(this);
  }

  update(e) {
    this.setState({ body: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeComment(this.state, this.props.videoId)
    this.setState({ body: ''})
  }

  noComment(e) {
    // debugger
    if (!this.props.currentUser) this.props.history.push('/signin')
    // debugger
    // console.log(this.props.currentUser)
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
          <button onClick={this.handleSubmit}>COMMENT</button>
        </form>
      </div>
    )
  }
};

const mSTP = state => ({
  currentUser: state.session.currentUser
})

export default withRouter(connect(mSTP)(CommentForm));