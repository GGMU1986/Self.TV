import { RECEIVE_VIDEO_DETAIL } from "../actions/videos_actions";

const CommentsReducer = (state = {}. action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_VIDEO_DETAIL:
      return {...state, ...action.payload.comments}

    default:
      return state;
  }
};

export default CommentsReducer;