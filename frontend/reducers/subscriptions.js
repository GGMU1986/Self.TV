import { RECEIVE_USER_DETAIL } from "../actions/users_action";

const SubscriptionsReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_USER_DETAIL:
      return {
        ...action.payload.subscriptions
      }
  
    default:
      return state
  }
}

export default SubscriptionsReducer;