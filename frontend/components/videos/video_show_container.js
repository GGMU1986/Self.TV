import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/videos_actions';
import { destroyComment } from '../../actions/comments_actions';
import { selectCommentsByVideo } from '../../reducers/selectors';

const mSTP = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.videoId],
  comments: selectCommentsByVideo(state, ownProps.match.params.videoId)
});

const mDTP = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId)),
  destroyComment: commentId => dispatch(destroyComment(commentId))
});

export default connect(mSTP, mDTP)(VideoShow);