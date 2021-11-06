import React from 'react';
import Modal from '../modal/modal';
import VideoIndexContainer from '../videos/video_index_container';
import Header from './header';
import SideNav from './side_nav';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Modal />
        <Header />
        <div className="splash-main">
          <SideNav />
          <VideoIndexContainer />
        </div>
      </div>
    )
  }
}

export default Home;

