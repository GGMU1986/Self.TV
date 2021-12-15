import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/videos_actions';
import { incrementViews } from '../../actions/view_actions';
import { fetchUser } from '../../actions/users_action';

const mSTP = state => ({
  currentUser: state.session.currentUser,
  videos: Object.values(state.entities.videos) 
});

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchVideos: () => dispatch(fetchVideos()),
  incViews: videoId => dispatch(incrementViews(videoId))
});

export default connect(mSTP, mDTP)(VideoIndex);