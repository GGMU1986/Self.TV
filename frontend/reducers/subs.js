import { 
  RECEIVE_USER_DETAIL
} from "../actions/users_action";

const SubsReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_USER_DETAIL:
      return {
        ...action.payload.subbedTo,
      }
  
    default:
      return state
  }
}

export default SubsReducer;