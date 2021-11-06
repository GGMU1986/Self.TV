import React from 'react';
import UploadVideoForm from '../videos/upload_video_form';
import VideoIndexContainer from '../videos/video_index_container';
import Header from './header';
import SideNav from './side_nav';

class Home extends React.Component {
  render() {
    return (
      <div>
        <UploadVideoForm />
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

