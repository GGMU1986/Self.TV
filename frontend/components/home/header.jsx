import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session';
<<<<<<< HEAD
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
=======
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faLinkedin,
//   faYoutube,
//   faGithub
// } from '@fortawesome/free-brands-svg-icons'
// library.add(
//   faLinkedin,
//   faYoutube,
//   faGithub
// )
>>>>>>> comments

class Header extends React.Component {
  render() {
    const { currentUser, logout } = this.props;
    // // debugger
    return (
      <div className="header">
<<<<<<< HEAD
        <div className="bars-logo">
          <FontAwesomeIcon className="bars" icon={faBars} />
          <div className="logo">
            <FontAwesomeIcon className="YT" icon={faYoutube} />
            <span>Self.TV</span>
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
            <FontAwesomeIcon icon={faVideo} className="link upload"/>
              <a href="https://github.com/GGMU1986" target="blank">
              <FontAwesomeIcon className="github" icon={faGithub} className="link"/>
              </a>
            <a href="https://www.linkedin.com/in/george-tsimis-a5986224/" target="blank">
              <FontAwesomeIcon className="linkedin" icon={faLinkedin} className="link"/>
              </a>
          </div>
          <div className="signin">
            <FontAwesomeIcon icon={faUserAstronaut} />
            {
              currentUser ? (
                <button onClick={() => logout()}>SIGN OUT</button>
              ) : (
                <Link to="/signin">SIGN IN</Link>
              )
            }
          </div>
=======
        <div className="logo">
          {/* <img src="../../../app/assets/images.splash_logo.jpeg" alt="logo" /> */}
          {/* <FontAwesomeIcon icon={faYoutube} /> */}
          <span>Self.TV</span>
        </div>
        <input type="text" placeholder="Seach" />
        <div className="signin">
          <a href="https://github.com/GGMU1986" target="blank">
            {/* <FontAwesomeIcon icon={faGithub} /> */}
            github
          </a> 
          <a href="https://www.linkedin.com/in/george-tsimis-a5986224/" target="blank">
            {/* <FontAwesomeIcon icon={faLinkedin} /> */}
            linkedin
          </a> 
          {
            currentUser ? (
              <button onClick={() => logout()}>SIGN OUT</button>
            ) : (
              <Link to="/signin">SIGN IN</Link>
            )
          }
>>>>>>> comments
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
