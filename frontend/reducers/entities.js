import { combineReducers } from "redux";
import VideosReducer from "./videos_reducer";
import CommentsReducer from "./comments";
import ViewsReducer from "./views";
import LikesReducer from "./likes_reducer";
import UploadsReducer from "./uploads";
import SubscriptionsReducer from "./subscriptions";

const EntitiesReducer = combineReducers({
  videos: VideosReducer,
  comments: CommentsReducer,
  views: ViewsReducer,
  likes: LikesReducer,
  uploads: UploadsReducer,
  subscriptions: SubscriptionsReducer
});

export default EntitiesReducer;

