import React from 'react'
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchVideos()
  };

  render() {
    const { videos } = this.props
    return (
      <div className="video-index">
        {
          videos.map(video => <VideoIndexItem 
                                key={video.id} 
                                video={video}
                              />)
        }
      </div>
    )
  }
};

export default VideoIndex;