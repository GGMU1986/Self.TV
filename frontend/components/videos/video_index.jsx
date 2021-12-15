import React from 'react'
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchVideos()
    if (this.props.currentUser){
      this.props.fetchUser(this.props.currentUser.id)
    }
  };

  render() {
    const { videos, incViews } = this.props;
    return (
      <div className="video-index">
        {
          videos.map(video => <VideoIndexItem 
                                key={video.id} 
                                video={video}
                                incViews={incViews}
                              />
                    )
        }
      </div>
    )
  }
};

export default VideoIndex;