import React from "react";

class UploadVideoForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { closeModal } = this.props;
    return (
      <div className="upload-video-container">
        <div className="upload-videos-header">
          <p className="title">Upload videos</p>
          <div className="upload-video-icons-header" onClick={closeModal}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <hr />
        <main className='file-upload'>
            {/* <i className="fas fa-upload"></i> */}
            <div className="upload-circle">
              <i className="fas fa-upload"></i>
            </div>
            <div className="mid-text">
              <div>
                Drag and drop files to upload
              </div>
              <div className='mid-text-lower'>
                Your videos will be private until you publish them.
              </div>
            </div>
          <label>SELECT FILES
            <input type="file" />
          </label>
        </main>
        <div className="footer-upload-videos">
          <p className='gray'>
            By submitting your videos to Self.TV, 
            you agree to Self.TV's <span>Terms of Service</span> and <span>Community Guidelines.</span><br />
            Please be sure not to violate others' copyright or privacy rights. <span>Learn more</span>
          </p>
        </div>
      </div>
    )
  }
}

export default UploadVideoForm; 