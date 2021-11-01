import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/videos_actions';
// import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => ({
  video: state.videos[ownProps.match.params.videoId]
});

const mDTP = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId))
});

export default connect(mSTP, mDTP)(VideoShow);