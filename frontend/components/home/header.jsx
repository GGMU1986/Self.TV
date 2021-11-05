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
library.add(
  faLinkedin,
  faYoutube,
  faGithub
)

class Header extends React.Component {
  render() {
    const { currentUser, logout } = this.props;
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
              <FontAwesomeIcon icon={faVideo} className="link"/>
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
                <div className="loggedin"
                  onClick={() => logout()}
                >
                  {currentUser.username[0].toUpperCase()} 
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
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Header);
