import React from 'react';
import Header from '../home/header';
import SideNavBig from '../home/side_nav_big';
import ChannelBody from './channel_body';
import ChannelHeader from './channel_header';
import Modal from '../modal/modal';
import { fetchUser } from '../../actions/users_action';
import { deleteVideo } from '../../utils/util_videos';
import { connect } from 'react-redux';

class Channel extends React.Component{

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id)
  }

  render() {
    const { currentUser, uploads, subs, deleteVideo } = this.props;
    return (
      <div>
        <Modal />
        <Header />
        <div className="channel-container">
          <SideNavBig />
            <div className="channel-header-body-container">
            <ChannelHeader 
              currentUser={currentUser}
              subs={subs}
            />
            <ChannelBody 
              currentUser={currentUser} 
              uploads={uploads} 
              deleteVideo={deleteVideo}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUser: state.session.currentUser,
  uploads: Object.values(state.entities.uploads),
  subs: state.entities.subscribers
});

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  deleteVideo: videoId => dispatch(deleteVideo(videoId))
});

export default connect(mSTP, mDTP)(Channel);