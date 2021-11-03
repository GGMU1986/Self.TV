import { deleteComment } from '../utils/util_comments';

export const REMOVE_COMMENT = 'REMOVE_COMMENT'

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const destroyComment = commentId => dispatch => (
  deleteComment(commentId).then(() => dispatch(removeComment(commentId)))
);