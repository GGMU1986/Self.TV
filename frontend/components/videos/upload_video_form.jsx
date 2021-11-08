import React from "react";
import UploadVideoTitle from './upload_video_title'
import UploadPart1 from "./video_upload_1";

class UploadVideoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      videoFile: null,
      photoFile: null
    };
    this.handleFile = this.handleFile.bind(this);
  };

  handleFile(e) {
    debugger
    this.setState({
      videoFile: e.currentTarget.files[0]
    })
    // this.props.closeModal();
    this.props.openModal('title');
    // console.log(this.props)
  };

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new formData();
  //   formData.append('video[]')
  // }

  render() {
    const { closeModal } = this.props;
    return (
      <UploadPart1 
        handleFile={this.handleFile} 
        closeModal={closeModal}
      />
    )
  }
}

// const mSTP = state => ({
//   video: {
//     title: '',
//     description: '',
//     videoUrl: null,
//     photoUrl: null,
//   }
// });



export default UploadVideoForm; 