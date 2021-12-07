import React from 'react';
import { Link } from 'react-router-dom'

class ChannelHeader extends React.Component{
  render() {
    const { currentUser } = this.props;
    return (
      <div className="channel-header-container">
        <div className="letter-username-sub-container">
          <div className="channel-header-letter">
            <p>{currentUser.username[0].toUpperCase()}</p> 
          </div>
          <div className="username-subs-container">
            <div className="channel-header-username">
              {currentUser.username}
            </div>
            <div className="channel-header-subs">
              0 Subscribers
            </div>
          </div>
          <div className="about-videos">
            <p className="channel-link">VIDEOS</p>
          </div>
        </div>
        {/* <button 
          // onClick={}
          className="create-channel-btn"
        >
          Create Channel
        </button> */}
      </div>
    )
  }
};

export default ChannelHeader;