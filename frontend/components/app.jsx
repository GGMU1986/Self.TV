import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './home/home';
import SignUpContainer from './session/signup_container';
import SignInContainer from './session/signin_container';
import VideoShowContainer from './videos/video_show_container';
import Channel from './channel/channel';
import Search from './search/search';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';


const App = () => (

  // ***************************************
  // ADD MODAL AND HEADER INSIDE DIV TO DRY UP CODE
  // ***************************************

  <div>
    <Switch>
      <Route exact path="/channel" component={Channel} />
      <Route exact path="/search" component={Search} />
      <Route path="/videos/:videoId" component={VideoShowContainer}/>
      <AuthRoute path="/signup" component={SignUpContainer}/>
      <AuthRoute path="/signin" component={SignInContainer}/>
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;