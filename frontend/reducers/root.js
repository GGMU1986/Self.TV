import { combineReducers } from "redux";
import SessionReducer from './session';
import SessionErrorsReducer from "./session_errors";

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: SessionErrorsReducer
});

export default RootReducer;