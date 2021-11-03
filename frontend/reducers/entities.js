import { combineReducers } from "redux";
import VideosReducer from "./videos_reducer";
import CommentsReducer from "./comments";

const EntitiesReducer = combineReducers({
  videos: VideosReducer,
  comments: CommentsReducer
});

export default EntitiesReducer;