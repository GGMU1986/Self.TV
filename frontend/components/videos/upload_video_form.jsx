import React from "react";
import { connect } from 'react-redux'
import UploadPart1 from "./video_upload_1";
import UploadPart2 from "./video_upload_2";

class UploadVideoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.video;
    
    this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleThumbnail = this.handleThumbnail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleFile(e) {
    debugger
    this.setState({
      videoFile: e.currentTarget.files[0]
    })
  };

  handleThumbnail(e) {
    debugger
    debugger
    this.setState({
      photoFile: e.currentTarget.value[0]
    })
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const formData = new formData();
    formData.append('video[title]', this.state.title)
    formData.append('video[description]', this.state.description)
    formData.append('video[video_file]', this.state.videoFile)
    formData.append('video[photo_file]', this.state.photoFile)
    this.props.createVideo(formData)
    this.props.history.push('/')
    
  }

  render() {
    const { closeModal } = this.props;
    const { videoFile } = this.state;
    const part = !videoFile ? (
      <UploadPart1 
        handleFile={this.handleFile} 
        closeModal={closeModal}
      />
    ) : (
      <UploadPart2 
        closeModal={closeModal}
        handleInput={this.handleInput}
        handleThumbnail={this.handleThumbnail}
        handleSubmit={this.handleSubmit}
      />
    )
    return (
      <div>{part}</div>
    )
  }
}

const mSTP = state => ({
  video: {
    title: '',
    description: '',
    videoFile: null,
    photoFile: null,
  }
});



export default connect(mSTP)(UploadVideoForm); 