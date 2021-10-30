import React from 'react';
import ReactDOM from 'react-dom';
import { logout } from './actions/session';
import Root from './components/root';
import configureStore from './store/store';
import { postUser } from './utils/session';

document.addEventListener('DOMContentLoaded', () => {
  window.postUser = postUser
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, root)
  window.store = store
  window.logout = logout
});

