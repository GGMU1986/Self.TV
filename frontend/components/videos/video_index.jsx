import React from 'react'
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  
  render() {
    const { videos } = this.props
    return (
      <div className="video-index">
        {
          videos.map((video, i)=> <VideoIndexItem 
                                key={i + 1} 
                                video={video}
                              />)
        }
      </div>
    )
  }
};

export default VideoIndex;