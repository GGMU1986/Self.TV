import { combineReducers } from "redux";
import SessionReducer from './session';
import SessionErrorsReducer from "./session_errors";
import EntitiesReducer from "./entities";
import UiReducer from "./ui_reducer";

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: SessionErrorsReducer,
  ui: UiReducer
});

export default RootReducer;