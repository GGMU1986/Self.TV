import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/videos_actions';
import { 
  destroyComment, 
  updateComment,
  makeComment 
} from '../../actions/comments_actions';
import { createLike, updateLike } from '../../actions/likes_actions';

const mSTP = (state, ownProps) => {
  let userLike = false;
  Object.values(state.entities.likes).some(like => like.likerId === state.session.currentUser.id && like.dislike === false) ? 
  userLike = true : userLike = false;
  return {
    userLike,
    currentUser: state.session.currentUser,
    subscriptions: Object.values(state.entities.subscriptions),
    video: state.entities.videos[ownProps.match.params.videoId],
    comments: Object.values(state.entities.comments),
    likes: Object.values(state.entities.likes),
    comment: {
      body: ''
    },
  } 
};

const mDTP = dispatch => ({
  fetchVideo: videoId => dispatch(fetchVideo(videoId)),
  destroyComment: commentId => dispatch(destroyComment(commentId)),
  action: (comment, videoId) => dispatch(makeComment(comment, videoId)),
  createLike: like => dispatch(createLike(like)),
  updateLike: like => dispatch(updateLike(like))
});

export default connect(mSTP, mDTP)(VideoShow);