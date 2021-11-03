import { 
  deleteComment, 
  createComment, 
  updateComment 
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
  // // debugger
  return deleteComment(commentId).then(() => { 
    // // debugger
    return dispatch(removeComment(commentId))})
};

// export const updateComment = (comment, videoId) => dispatch => {
//   // // debugger
//   return updateComment(comment, videoId).then(comment => { 
//     // // debugger
//     return dispatch(receiveComment(comment))})
// };

export const makeComment = (comment, videoId) => dispatch => {
  // // debugger
  return createComment(comment, videoId).then(comment => { 
    // // debugger
    return dispatch(receiveComment(comment))})
};

