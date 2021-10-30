import { combineReducers } from "redux";
import SessionReducer from './session';

const RootReducer = combineReducers({
  session: SessionReducer
});

export default RootReducer;