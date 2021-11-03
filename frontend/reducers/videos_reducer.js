import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO_DETAIL } from "../actions/videos_actions";

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
  
    default:
      return state;
  }
};

export default VideosReducer;