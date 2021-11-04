import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/videos_actions';
import { 
  destroyComment, 
  updateComment,
  makeComment 
} from '../../actions/comments_actions';

const mSTP = (state, ownProps) => {
  // console.log(ownProps)
  return {
    video: state.entities.videos[ownProps.match.params.videoId],
    comments: Object.values(state.entities.comments),
    comment: {
      body: ''
    }
  } 
};

const mDTP = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId)),
  destroyComment: commentId => dispatch(destroyComment(commentId)),
  action: (comment, videoId) => dispatch(makeComment(comment, videoId)) 
});

export default connect(mSTP, mDTP)(VideoShow);