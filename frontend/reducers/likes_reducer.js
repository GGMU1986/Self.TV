import { RECEIVE_LIKE } from "../actions/likes_actions";

const LikesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIKE:
      return {
        ...state, [action.like.id]: action.like
      }   
  
    default:
      return state;
  }
};

export default LikesReducer;