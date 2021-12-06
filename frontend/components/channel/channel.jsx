import React from 'react';
import Header from '../home/header';
import SideNavBig from '../home/side_nav_big';
import ChannelBody from './channel_body';
import ChannelHeader from './channel_header';
import { connect } from 'react-redux';

class Channel extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <div className="channel-container">
          <SideNavBig />
          <div className="channel-header-body-container">
          <ChannelHeader 
            currentUser={currentUser}
          />
          <ChannelBody />
          </div>
        </div>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUser: state.session.currentUser
});

// const mDTP = dispatch => ({

// });

export default connect(mSTP)(Channel);