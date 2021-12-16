import React from 'react';
import Header from '../home/header';
import SideNavBig from '../home/side_nav_big';
import Modal from '../modal/modal';
import SearchVideoItem from './search_video_item';
import { incrementViews } from '../../actions/view_actions';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/users_action';


class Search extends React.Component{

  componentDidMount(){
    if (this.props.currentUser){
      this.props.fetchUser(this.props.currentUser.id)
    } 
  }

  render() {
    const { searchArray } = this.props.location.state
    const { incViews } = this.props
    return (
      <div>
        <Modal />
        <Header />
        <div className="search-container">
          <SideNavBig />
          <div className="search-body-container">
            <p className="search-results">Search results...</p>
            {
              searchArray.length > 0 ? (
              searchArray.map(video => <SearchVideoItem
                                          key={video.id} 
                                          video={video}
                                          incViews={incViews} 
                                        /> 
                              )
              ) : (
                    <div className="empty-search">
                      No videos match your search 😔
                    </div> 
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mSTP = state => ({
  currentUser: state.session.currentUser
});

const mDTP = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  incViews: videoId => dispatch(incrementViews(videoId))
});

export default connect(mSTP, mDTP)(Search);