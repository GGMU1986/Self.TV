import { combineReducers } from "redux";
import VideosReducer from "./videos_reducer";
import CommentsReducer from "./comments";
import ViewsReducer from "./views";
import LikesReducer from "./likes_reducer";

const EntitiesReducer = combineReducers({
  videos: VideosReducer,
  comments: CommentsReducer,
  views: ViewsReducer,
  likes: LikesReducer
});

export default EntitiesReducer;

