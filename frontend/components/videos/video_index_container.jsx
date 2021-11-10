import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/videos_actions';
import { incrementViews } from '../../actions/view_actions';

const mSTP = state => ({
 videos: Object.values(state.entities.videos) 
});

const mDTP = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
  incViews: videoId => dispatch(incrementViews(videoId))
});

export default connect(mSTP, mDTP)(VideoIndex);