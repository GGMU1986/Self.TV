import React from "react";
import SideNavBig from '../home/side_nav_big';
import ChannelHeader from './channel_header';

class ChannelAbout extends React.Component{
  render() {
    return (
        <div>
        <SideNavBig />
        <div className="channel-header-body-container">
          <ChannelHeader 
            currentUser={currentUser}
          />
          Channel About Section
        </div>
      </div>
    )
  }
}

export default ChannelAbout;