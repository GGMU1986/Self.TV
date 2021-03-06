import { 
  RECEIVE_ALL_VIDEOS, 
  RECEIVE_VIDEO_DETAIL,
  RECEIVE_VIDEO,
  REMOVE_VIDEO
} from "../actions/videos_actions";

//debugger
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
    
    case REMOVE_VIDEO:
      //debugger
      let nextState = Object.assign({}, state)
      delete nextState[action.videoId]
      return nextState; 

    default:
      return state;
  }
};

export default VideosReducer;