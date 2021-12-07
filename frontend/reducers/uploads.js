import { RECEIVE_UPLOADS } from "../actions/uploads_action";

const UploadsReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_UPLOADS:
      return {
        ...action.uploads
      }
  
    default:
      return state
  }
}

export default UploadsReducer;