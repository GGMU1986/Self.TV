import { 
  RECEIVE_ALL_VIDEOS, 
  RECEIVE_VIDEO_DETAIL,
  RECEIVE_VIDEO 
} from "../actions/videos_actions";

const VideosReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.videos
    
    case RECEIVE_VIDEO_DETAIL:
      return Object.assign(
                            {}, 
                            state, 
                            { [action.payload.video.id]: action.payload.video }
                          )
    case RECEIVE_VIDEO:
      return Object.assign(
          {},
          state,
          { [action.video.id]: action.video }
        )
    default:
      return state;
  }
};

export default VideosReducer;