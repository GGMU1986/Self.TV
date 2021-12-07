import React from 'react';
import Header from '../home/header';
import SideNavBig from '../home/side_nav_big';
import ChannelBody from './channel_body';
import ChannelHeader from './channel_header';
import Modal from '../modal/modal';
import { fetchUploads } from '../../actions/uploads_action';
import { connect } from 'react-redux';

class Channel extends React.Component{

  componentDidMount(){
    this.props.fetchUploads(this.props.currentUser.id)
  }

  render() {
    const { currentUser, uploads } = this.props;
    return (
      <div>
        <Modal />
        <Header />
        <div className="channel-container">
          <SideNavBig />
            <div className="channel-header-body-container">
            <ChannelHeader 
              currentUser={currentUser}
            />
            <ChannelBody 
              currentUser={currentUser} 
              uploads={uploads} 
            />
          </div>
        </div>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUser: state.session.currentUser,
  uploads: Object.values(state.entities.uploads)
});

const mDTP = dispatch => ({
  fetchUploads: userId => dispatch(fetchUploads(userId))
});

export default connect(mSTP, mDTP)(Channel);