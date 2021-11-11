import React from 'react'
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchVideos()
  };

  // componentDidUpdate() {
  //   this.props.fetchVideos()
  // }

  render() {
    const { videos, incViews } = this.props;
    return (
      <div className="video-index">
        {
          videos.map(video => <VideoIndexItem 
                                key={video.id} 
                                video={video}
                                incViews={incViews}
                              />)
        }
      </div>
    )
  }
};

export default VideoIndex;