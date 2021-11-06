import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBars, faMicrophone, faVideo,
  faUserAstronaut
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faBars, faMicrophone, faUserAstronaut, faVideo
)
import {
  faLinkedin,
  faYoutube,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import { openModal } from '../../actions/modal_actions';
library.add(
  faLinkedin,
  faYoutube,
  faGithub
)

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.addActiveClass = this.addActiveClass.bind(this);
  }

  addActiveClass(e) {
    const currState = this.state.active
    this.setState({
      active: !currState
    })
  }

  render() {
    const { currentUser, logout, openModal } = this.props;
    // // // debugger
    return (
      <div className="header">
        <div className="bars-logo">
          <FontAwesomeIcon className="bars" icon={faBars} />
          <div className="logo">
            <Link className="logo-link" to="/">
              <FontAwesomeIcon className="YT" icon={faYoutube} />
              <span className="self">Self.TV</span>
            </Link>
          </div>
        </div>

        <div className="search-mic">
          <input type="text" placeholder="Search" />
          <div className="mag-glass">
            <i className="fas fa-search"></i>
          </div>
          <div className="mic">
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
        </div>

        <div className="ext-links">
          <div className="links">
            { currentUser ? (
              <div onClick={() => openModal('upload')}>
                <FontAwesomeIcon icon={faVideo} className="link"/>
              </div>
            ) : null }
            <a href="https://github.com/GGMU1986" target="blank">
              <FontAwesomeIcon icon={faGithub} className="link"/>
            </a>
            <a href="https://www.linkedin.com/in/george-tsimis-a5986224/" target="blank">
              <FontAwesomeIcon icon={faLinkedin} className="link two"/>
            </a>
          </div>
          <div>
            {
              currentUser ? (
                <div onClick={this.addActiveClass} className="loggedin">
                  {currentUser.username[0].toUpperCase()} 
                  <div className={this.state.active ? 'dropdown active' : 'dropdown'}>
                    <div className="dropdown-username">
                      {currentUser.username}
                    </div>
                    <div className="out">
                      <i className="fas fa-user-alt"></i>
                      <p>Your channel</p>
                    </div>
                    <div className="out" onClick={() => logout()}>
                      <i className="fas fa-sign-out-alt"></i>
                      <p>Sign out</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="signin">
                  <FontAwesomeIcon icon={faUserAstronaut} />
                  <Link to="/signin">SIGN IN</Link>
                </div>
              )
            }
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
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP, mDTP)(Header);
