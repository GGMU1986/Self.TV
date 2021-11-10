import { faDove } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const UploadPart2 = ({ 
  closeModal, handleInput, handleThumbnail, 
  handleSubmit, photoFile, title, videoUrl, photoUrl 
}) => {
  return (
    <div className="title-desc-container">
      <div className="header2">
        <p className="video-file-name">{title}</p>
        <div className="upload-video-icons-header" onClick={closeModal}>
         <i className="fas fa-times"></i>
        </div>
      </div>
      <hr />
      <div className="middle">
        <div className="middle-left">
          <p className="details">Details</p>
          <input  
            type="text" className='title2' 
            placeholder="Title (required)" 
            onChange={handleInput('title')} 
          />
          <textarea 
            className="descr" 
            placeholder="Tell viewers about your video" 
            onChange={handleInput('title')} 
          />
          <h2 className="thumb">Thumbnail</h2>
            <p className="words">Select or upload a picture that shows what's in your video.
            A good thumbnail stands out and draws viewers' attention. 
            <span>Learn more</span></p>
            {
              photoFile ? (
               <div className="thumbnail-prev-cont">
                 <div className="thumbnail-prev">
                  <img 
                    src={photoUrl} 
                    alt="thumbnail" 
                  />
                 </div>
                 <div className="thumbnail-name">
                  {photoFile.name}
                 </div>
               </div>  
              ) : (
                <label className="thumb-input2">
                  <i className="fas fa-image"></i>
                  <input type="file" className="thumb-file" onChange={handleThumbnail}/>
                </label>
              ) 
            }
        </div>
        <div className="middle-right">
          {
            <video
              className="video-preview" 
              src={videoUrl} 
              controls
              muted
            />
          }
        </div>
      </div>
      <hr />
      <div className="publish">
        <button className="pub-btn" onClick={handleSubmit}>PUBLISH</button>
      </div>
    </div>
  )
};

export default UploadPart2;