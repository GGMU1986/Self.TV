import { RECEIVE_VIDEO_DETAIL } from "../actions/videos_actions";
import { REMOVE_COMMENT } from "../actions/comments_actions";

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_VIDEO_DETAIL:
      return {...state, ...action.payload.comments}

    case REMOVE_COMMENT:
      delete nextState[action.commentId]
      return nextState;

    default:
      return state;
  }
};

export default CommentsReducer;