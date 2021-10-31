import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/videos';

const mSTP = state => ({
 videos: Object.values(state.videos) 
});

const mDTP = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mSTP, mDTP)(VideoIndex);