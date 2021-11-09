import { faDove } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const UploadPart2 = ({ closeModal, handleInput, handleThumbnail, handleSubmit, videoFile }) => {
  return (
    <div className="title-desc-container">
      <div className="header2">
        <p className="video-file-name">{videoFile}</p>
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
            placeholder="Title" onChange={handleInput('title')} 
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
            <label className="thumb-input2">
              <i className="fas fa-image"></i>
              <input type="file" className="thumb-file" onChange={handleThumbnail}/>
            </label>
        </div>
        <div className="middle-right">
          [PREVIEW]
        </div>
      </div>
      <hr />
      <div className="publish">
        <button className="pub-btn" onClick={handleSubmit}>PUBLISH</button>
      </div>
    </div>

    
    // <div className="title-desc-container">
    //   <div className="upload-videos-header">
    //     <p className="video-file-name">[Title goes here]</p>
    //     <div className="upload-video-icons-header" onClick={closeModal}>
    //       <i className="fas fa-times"></i>
    //     </div>
    //   </div>
    //   <hr />
    //   <div class="middle">
    //     <div className="middle-text-title">
    //       <div className="middle-top">
    //         <h2>Details</h2>
    //         <input
    //           className="details" 
    //           type="text" 
    //           placeholder="Title (required)" 
    //           required
    //           onChange={handleInput('title')} 
    //         />
    //         <textarea
    //           className="description" 
    //           placeholder="Descritpion of your video..."
    //           onChange={handleInput('description')}
    //         />
    //       </div>
    //       <div className="middle-bottom">
    //         <h2>Thumbnail</h2>
    //         <p>Select or upload a picture that shows what's in your video. 
    //           A good thumbnail stands out and draws viewers' attention. 
    //           <span>Learn more</span></p>
    //         <input type="file" onChange={handleThumbnail}/>
    //       </div>
    //     </div>
    //     <div className="preview">

    //     </div>
    //   </div>
    //   <div className>
    //     <button onClick={handleSubmit}>PUBLISH</button>
    //   </div>
    // </div>
  )
};

export default UploadPart2;