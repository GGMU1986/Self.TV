import { connect } from 'react-redux';
import VideoIndex from './video_index';

const mSTP = state => ({
 videos: [video1, video2, video3]
});

// mDTP = dispatch => ({

// });

export default connect(mSTP)(VideoIndex);