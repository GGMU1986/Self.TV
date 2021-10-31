import { combineReducers } from "redux";
import SessionReducer from './session';
import SessionErrorsReducer from "./session_errors";
import VideosReducer from "./videos";

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: SessionErrorsReducer,
  videos: VideosReducer
});

export default RootReducer;