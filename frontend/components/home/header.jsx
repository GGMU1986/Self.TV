import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import { openModal } from '../../actions/modal_actions';
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
  faGithub,
  faAngellist
} from '@fortawesome/free-brands-svg-icons'
library.add(
  faLinkedin,
  faYoutube,
  faGithub,
  faAngellist,
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
    // const profile = currentUser.imgUrl ? (
    //   currentUser.imgUrl
    // ) : (
    //   currentUser.username[0].toUpperCase() 
    // )
    
    return (
      <div className="header">
        <div className="bars-logo">
          {/* <i  class="fas fa-bars bars">
            {/* <i class="fas fa-hamburger ham collapsed"></i> */}
          {/* </i>  */}
          <FontAwesomeIcon 
            onClick={() => openModal('side-nav')} 
            className="bars" 
            icon={faBars} 
          />
          <div className="logo">
            <Link className="logo-link" to="/">
              <FontAwesomeIcon className="YT" icon={faYoutube} />
              <span className="self">Self.TV</span>
            </Link>
          </div>
        </div>

        <div className="search-mic">
          <div className='search-glass'>
            <input className="input" type="text" placeholder="Search" />
            <div className="mag-glass">
              <i className="fas fa-search"></i>
            </div>
          </div>
          <div className="mic">
            <FontAwesomeIcon 
              className="mic-icon"
              icon={faMicrophone} 
            />
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
            <a 
              href="https://www.linkedin.com/in/george-tsimis-a5986224/" 
              target="blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="link two"/>
            </a>
            <a 
              href="https://angel.co/u/george-tsimis" 
              target="blank"
            >
              <FontAwesomeIcon icon={faAngellist} className="link"/>
            </a>
            <a 
              href="https://ggmu1986.github.io/" 
              target="blank"
            >
              {/* <FontAwesomeIcon icon={faAngellist} className="link"/> */}
              <i className="fas link fa-user-tie"></i>
            </a>
          </div>
          <div>
            {
              currentUser ? (
                <div onClick={this.addActiveClass} className="loggedin">
                  {/* {
                    currentUser.imgUrl ? (
                      <div className="prof-icon-img"><img className="hi" src={currentUser.imgUrl} alt="profile-pic" /></div>
                    ) : (
                      <div className="prof-icon-content">{currentUser.username[0].toUpperCase()}</div>
                    )
                  } */}
                  <div className="prof-icon-content">{currentUser.username[0].toUpperCase()}</div>
                  <div className={this.state.active ? 'dropdown active' : 'dropdown'}>
                    <div className="dropdown-username">
                      <div className="user-email">
                        <div className="user">
                          {currentUser.username}
                        </div>
                        <div className="email">
                          {currentUser.email}
                        </div>
                      </div>
                    </div>
                    <Link className="out" to="/channel">
                      <i className="fas fa-user-alt icon"></i>
                      <p>Your channel</p>
                    </Link>
                    <div className="out" onClick={() => logout()}>
                      <i className="fas fa-sign-out-alt icon"></i>
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
