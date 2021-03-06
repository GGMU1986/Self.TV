import { RECEIVE_USER_DETAIL } from "../actions/users_action";

const SubscribersReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_USER_DETAIL:
      return action.payload.subscribers
  
    default:
      return state
  }
}

export default SubscribersReducer;