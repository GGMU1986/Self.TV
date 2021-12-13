import { RECEIVE_USER_DETAIL } from "../actions/users_action";
import { REMOVE_SUB, RECEIVE_SUB } from "../actions/subs_actions";

const SubscriptionsReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USER_DETAIL:
      return {
        ...action.payload.subscriptions,
      }
    
    case RECEIVE_SUB:

      nextState.subs[action.payload.sub.id] = action.payload.sub
      nextState.usersSubTo[action.payload.subbedTo.id] = action.payload.subbedTo
      return nextState
    
    case REMOVE_SUB:
      debugger
      delete nextState.subs[action.payload.sub.id]
      delete nextState.usersSubTo[action.payload.subbedTo.id]
      return nextState
  
    default:
      return state
  }
}

export default SubscriptionsReducer;