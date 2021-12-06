import React from 'react';
import Header from '../home/header';
import SideNavBig from '../home/side_nav_big';
import ChannelBody from './channel_body';
import ChannelHeader from './channel_header';

class Channel extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <div className="channel-container">
          <SideNavBig />
          <div className="channel-header-body-container">
          <ChannelHeader />
          <ChannelBody />
          </div>
        </div>
      </div>
    )
  }
}

export default Channel;