import React from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { createVideo } from '../../actions/videos_actions';
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
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        title: file.name,
        videoFile: file,
        videoUrl: fileReader.result
      })
    }
    if (file) fileReader.readAsDataURL(file);
  };

  handleThumbnail(e) {
    const file = e.currentTarget.files[0]
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        photoUrl: fileReader.result
      })
    }
    if (file) fileReader.readAsDataURL(file);
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  };

  handleSubmit(e) {
    
    e.preventDefault();
    let formData = new FormData();
    formData.append('video[title]', this.state.title)
    formData.append('video[description]', this.state.description)
    formData.append('video[video]', this.state.videoFile)
    formData.append('video[photo]', this.state.photoFile)
    this.props.createVideo(formData)
      .then(video => this.props.history.push('/'));
      this.props.closeModal();
  }

  render() {
    const { closeModal } = this.props;
    const { videoFile, title, videoUrl, photoUrl } = this.state;
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
        photoFile={this.state.photoFile}
        title={title}
        videoUrl={videoUrl}
        photoUrl={photoUrl}
      />
    )
    return (
      <div>{part}</div>
      // <div>
      //     <UploadPart2 
      //     closeModal={closeModal}
      //     handleInput={this.handleInput}
      //     handleThumbnail={this.handleThumbnail}
      //     handleSubmit={this.handleSubmit}
      //     photoFile={this.state.photoFile}
      //     title={title}
      //     videoUrl={videoUrl}
      //     photoUrl={photoUrl}
      //   />
      // </div>
    )
  }
}

const mSTP = state => ({
  video: {
    title: '',
    description: '',
    videoFile: null,
    videoUrl: null,
    photoFile: null,
    photoUrl: null
  }
});

const mDTP = dispatch => {
  return {
    createVideo: video => dispatch(createVideo(video))
  }
};



export default withRouter(connect(mSTP, mDTP)(UploadVideoForm)); 