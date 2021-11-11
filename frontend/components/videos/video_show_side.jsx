import React from 'react';
import { connect } from 'react-redux';
import { incrementViews } from '../../actions/view_actions';
import VideoSideItem from './video_side_item';

class VideoShowSide extends React.Component {
  render() {
    const { videos, videoId, incViews } = this.props
    // console.log(videos, videoId)
    const otherVids = Object.values(videos).filter(vid => vid.id.toString() !== videoId)
    console.log(otherVids)
    return (
      <div className="side-vid-show">
        {
          otherVids.map(video => <VideoSideItem 
                                  key={video.id} 
                                  video={video} 
                                  incViews={incViews}
                                />)
        }
      </div>
    )
  }
};

const mSTP = state => ({
  videos: state.entities.videos
});

const mDTP = dispatch => ({
  incViews: videoId => dispatch(incrementViews(videoId))
});

export default connect(mSTP, mDTP)(VideoShowSide);