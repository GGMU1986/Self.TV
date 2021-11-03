import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session';
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

class Header extends React.Component {
  render() {
    const { currentUser, logout } = this.props;
    // debugger
    return (
      <div className="header">
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
