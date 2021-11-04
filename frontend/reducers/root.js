import { combineReducers } from "redux";
import SessionReducer from './session';
import SessionErrorsReducer from "./session_errors";
import EntitiesReducer from "./entities";

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: SessionErrorsReducer
});

export default RootReducer;