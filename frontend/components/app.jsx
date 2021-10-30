import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './home/home';
import SignUpContainer from './session/signup_container';
import SignInContainer from './session/signin_container';


const App = () => (
  <div>
    <Switch>
      <Route path="/signup" component={SignUpContainer}/>
      <Route path="/signin" component={SignInContainer}/>
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;