import { RECEIVE_USER_DETAIL } from "../actions/users_action";

const UploadsReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_USER_DETAIL:
      return {
        ...action.payload.uploads
      }
  
    default:
      return state
  }
}

export default UploadsReducer;