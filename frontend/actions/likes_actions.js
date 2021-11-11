import { postLike, updateLike } from '../utils/like_utils'

export const RECEIVE_LIKE = 'RECEIVE_LIKE'

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

export const createLike = like => dispatch => {

  postLike(like).then(like => {

    return dispatch(receiveLike(like))})
};

export const reviseLike = like => dispatch => (
  updateLike(like).then(like => dispatch(receiveLike(like)))
);