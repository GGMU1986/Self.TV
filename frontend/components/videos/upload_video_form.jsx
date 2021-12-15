import React from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { createVideo, fetchVideos } from '../../actions/videos_actions';
import UploadPart1 from "./video_upload_1";
import UploadPart2 from "./video_upload_2";

class UploadVideoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.video
    
    this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleThumbnail = this.handleThumbnail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleFile(e) {
    // check if file ends with .mp4 || .MP4
    const file = e.currentTarget.files[0]
  
    if ((!file.name.endsWith('.mp4')) && (!file.name.endsWith('.MP4'))){
      this.setState({
        errors: "Please make sure your video is an MP4!"
      })
    } else {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({
          title: file.name,
          videoFile: file,
          videoUrl: fileReader.result
        })
      }
      if (file) fileReader.readAsDataURL(file);
    }
  };

  handleThumbnail(e) {
    const file = e.currentTarget.files[0]
  
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: file,
        photoUrl: fileReader.result,
        thumbErrors: ''
      })
    }
    if (file) fileReader.readAsDataURL(file);
  }
  
  handleInput(field) {
    return e => this.setState({ 
      [field]: e.currentTarget.value, 
      titleErrors: '' 
    });
  };

  handleSubmit(e) {
    let publish = true;

    if (!this.state.photoFile){
      publish = false;
      this.setState({
        thumbErrors: 'Please choose a Thumbnail'
      })
    } 
    if (!this.state.title){
      publish = false;
      this.setState({
        titleErrors: 'A title is required'
      })
    }

    if (publish){
      e.preventDefault();
      let formData = new FormData();
      formData.append('video[title]', this.state.title)
      formData.append('video[description]', this.state.description)
      formData.append('video[video]', this.state.videoFile)
      formData.append('video[photo]', this.state.photoFile)
      this.props.createVideo(formData).then(() => this.props.fetchVideos())
        .then(video => this.props.history.push('/'));
        this.props.closeModal();
    }
  }

  render() {
    
    const { closeModal } = this.props;
    const { 
      videoFile, title, videoUrl, 
      photoUrl, errors, thumbErrors, titleErrors 
    } = this.state;

    const part = !videoFile ? (
      <UploadPart1 
        handleFile={this.handleFile} 
        closeModal={closeModal}
        errors={errors}
      />
    ) : (
      <UploadPart2 
        closeModal={closeModal}
        handleInput={this.handleInput}
        fileInputType={this.fileInputType}
        handleThumbnail={this.handleThumbnail}
        handleSubmit={this.handleSubmit}
        photoFile={this.state.photoFile}
        title={title}
        videoUrl={videoUrl}
        photoUrl={photoUrl}
        thumbErrors={thumbErrors}
        titleErrors={titleErrors}
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
    videoUrl: null,
    photoFile: null,
    photoUrl: null,
    errors: '',
    thumbsErrors: '',
    titleErrors: ''
  },
});

const mDTP = dispatch => {
  return {
    createVideo: video => dispatch(createVideo(video)),
    fetchVideos: () => dispatch(fetchVideos())
  }
};



export default withRouter(connect(mSTP, mDTP)(UploadVideoForm)); 