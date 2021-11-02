import { combineReducers } from "redux";
import VideosReducer from "./videos_reducer";

const EntitiesReducer = combineReducers({
  videos: VideosReducer
});

export default EntitiesReducer;