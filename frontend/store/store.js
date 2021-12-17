import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root';

let middlewares = [thunk];
if (process.env.NODE_ENV !== "production") {
2
}

const configureStore = (preloadedState) => (
  createStore(
    RootReducer, 
    preloadedState,
    applyMiddleware(...middlewares)
  )
);

export default configureStore; 
