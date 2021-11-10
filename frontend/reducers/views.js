import { RECEIVE_VIEW } from '../actions/view_actions';

const ViewsReducer = (state = {}, action) => {
  // // // debugger
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_VIEW:
      return { ...state, [action.view.id]: action.view }
    default:
      return state;
  }
};

export default ViewsReducer;