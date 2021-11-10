import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import { fetchVideo } from './actions/videos_actions';
// import { selectCommentsByVideo } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchVideo = fetchVideo;
  // window.selectCommentsByVideo = selectCommentsByVideo;
  
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser){
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    }
  }
  const store = configureStore(preloadedState);
  window.store = store;
  ReactDOM.render(<Root store={store} />, root)
});

