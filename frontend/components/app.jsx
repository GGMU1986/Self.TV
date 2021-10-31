import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './home/home';
import SignUpContainer from './session/signup_container';
import SignInContainer from './session/signin_container';

import { AuthRoute, ProtectedRoute } from '../utils/route_utils';


const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/signup" component={SignUpContainer}/>
      <AuthRoute path="/signin" component={SignInContainer}/>
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;