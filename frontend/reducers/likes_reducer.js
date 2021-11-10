import { RECEIVE_LIKE } from "../actions/likes_actions";
import { RECEIVE_VIDEO_DETAIL } from "../actions/videos_actions";

const LikesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEO_DETAIL:
      return {
        ...state, ...action.payload.likes
      }

    case RECEIVE_LIKE:
      return {
        ...state, [action.like.id]: action.like
      }   
  
    default:
      return state;
  }
};

export default LikesReducer;