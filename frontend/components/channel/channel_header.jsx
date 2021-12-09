import React from 'react';

class ChannelHeader extends React.Component{
  render() {
    const { currentUser, subs } = this.props;

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
              {
                {subs} === 1 ? `${subs} Subscriber` : `${subs} Subscribers`
              }
            </div>
          </div>
          <div className="about-videos">
            <p className="channel-link">VIDEOS</p>
          </div>
        </div>
      </div>
    )
  }
};

export default ChannelHeader;