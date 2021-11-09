import React from "react";

const UploadPart2 = ({ closeModal, handleInput, handleThumbnail, handleSubmit }) => {
  return (

    <div className="title-desc-container">
      <div className="upload-videos-header">
        <p className="video-file-name">[Title goes here]</p>
        <div className="upload-video-icons-header" onClick={closeModal}>
          <i className="fas fa-times"></i>
        </div>
      <hr />
      </div>
      <div className="middle-text-title">
        <h2>Details</h2>
        <input
          className="details" 
          type="text" 
          placeholder="Title (required)" 
          required
          onChange={handleInput('title')} 
        />
        <textarea
          className="description" 
          placeholder="Descritpion of your video..."
          onChange={handleInput('description')}
        />
        <h2>Thumbnail</h2>
        <p>Select or upload a picture that shows what's in your video. 
          A good thumbnail stands out and draws viewers' attention. 
          <span>Learn more</span></p>
        <input type="file" onChange={handleThumbnail}/>
      </div>
      <div className>
        <button onClick={handleSubmit}>PUBLISH</button>
      </div>
    </div>
  )
};

export default UploadPart2;