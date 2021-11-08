import { postLike } from '../utils/like_utils'

export const RECEIVE_LIKE = 'RECEIVE_LIKE'

const recieveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const incrementLikes = videoId => dispatch => (
  postLike(videoId).then(like => dispatch(recieveLike(like)))
);