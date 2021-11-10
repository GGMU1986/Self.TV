import { 
  deleteComment, 
  createComment, 
  updateComment, 
  fetchComment
} from '../utils/util_comments';

export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const destroyComment = commentId => dispatch => {
  return deleteComment(commentId).then(() => { 
    return dispatch(removeComment(commentId))})
};

export const reviseComment = (comment) => dispatch => {
  return updateComment(comment).then(comment => { 
    return dispatch(receiveComment(comment))})
};

export const requestComment = commentId => dispatch => {
  return fetchComment(commentId).then(comment => {
    return dispatch(receiveComment(comment))}) 
}

export const makeComment = (comment, videoId) => dispatch => {
  return createComment(comment, videoId).then(comment => { 
    return dispatch(receiveComment(comment))})
};

