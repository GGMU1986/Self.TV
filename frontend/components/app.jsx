import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './home/home';
import SignUpContainer from './session/signup_container';
import SignInContainer from './session/signin_container';
import VideoShowContainer from './videos/video_show_container';
import EditFormContainer from './comments/edit_comment_form_container';
import Channel from './channel/channel';
import ChannelAbout from './channel/channel_about';
import ChannelVideos from './channel/channel_videos';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';


const App = () => (
  <div>
    <Switch>
      <Route path="/channel" component={Channel} />
      <Route path="/about" component={ChannelAbout} />
      <Route exact path="/videos" component={ChannelVideos} />
      <Route path="/videos/:videoId" component={VideoShowContainer}/>
      <Route path="/edit" component={EditFormContainer} />
      <AuthRoute path="/signup" component={SignUpContainer}/>
      <AuthRoute path="/signin" component={SignInContainer}/>
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default App;