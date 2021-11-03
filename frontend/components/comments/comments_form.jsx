import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      video_id: this.props.videoId,
      body: '' 
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ body: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.makeComment(this.state, this.props.videoId)
    this.props.makeComment(this.state, this.props.videoId)
    this.setState({ body: ''})
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
          />
          <button onClick={this.handleSubmit}>COMMENT</button>
        </form>
      </div>
    )
  }
};

export default CommentForm;