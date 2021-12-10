import { 
  RECEIVE_USER_DETAIL,
  RECEIVE_SUB,
  REMOVE_SUB 
} from "../actions/users_action";

const SubscriptionsReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_USER_DETAIL:
      return {
        ...action.payload.subscriptions,
      }
    
    case RECEIVE_SUB:
      return {
        ...state,
        [action.sub.id]: action.sub
      }
    
    case REMOVE_SUB:
      let nextState = Object.assign({}, state)
      delete nextState[userId]
      return nextState
  
    default:
      return state
  }
}

export default SubscriptionsReducer;