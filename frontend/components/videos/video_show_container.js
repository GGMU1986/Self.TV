import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/videos_actions';
import { destroyComment, makeComment } from '../../actions/comments_actions';
import { createLike, updateLike } from '../../actions/likes_actions';
import { createSub, destroySub } from '../../actions/subs_actions';
import { fetchUser } from '../../actions/users_action';

const mSTP = (state, ownProps) => {
  // let userLike = false;
  // Object.values(state.entities.likes).some(like => like.likerId === state.session.currentUser.id && like.dislike === false) ? 
  // userLike = true : userLike = false;
  let subbedTo = state.entities.subscriptions.usersSubTo ? (
    Object.values(state.entities.subscriptions.usersSubTo)
    ) : []
  let subs = state.entities.subscriptions.subs ? (
    Object.values(state.entities.subscriptions.subs)
    ) : []
  return {
    // userLike,
    currentUser: state.session.currentUser,
    subs,
    subbedTo,
    video: state.entities.videos[ownProps.match.params.videoId],
    subCount: state.entities.videos[ownProps.match.params.videoId].subCount,
    comments: Object.values(state.entities.comments),
    likes: Object.values(state.entities.likes),
    comment: {
      body: ''
    },
  } 
};

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchVideo: videoId => dispatch(fetchVideo(videoId)),
  destroyComment: commentId => dispatch(destroyComment(commentId)),
  action: (comment, videoId) => dispatch(makeComment(comment, videoId)),
  createLike: like => dispatch(createLike(like)),
  updateLike: like => dispatch(updateLike(like)),
  createSub: userId => dispatch(createSub(userId)),
  destroySub: (subId, userId) => dispatch(destroySub(subId, userId))
});

export default connect(mSTP, mDTP)(VideoShow);