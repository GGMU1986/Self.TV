import React from 'react'
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

class SideNavBig extends React.Component{
  render() {
    return (
      <div className="side-nav-big">
         <Link to="/" className="big-nav-link">
          <div className="side-nav-icon-cont">
            <div className="icon2">
              <i className="fas fa-home"></i>
            </div>
            <div className="side-nav-icon-text">
              Home
            </div>
          </div>
        </Link >
        <Link to="" className="big-nav-link">
          <div className="side-nav-icon-cont">
            <div className="icon2">
              <i className="far fa-compass"></i>
            </div>
            <div className="side-nav-icon-text">
              Explore
            </div>
          </div>
        </Link>
        <Link to="" className="big-nav-link last-link">
          <div className="side-nav-icon-cont">
            <div className="icon2">
              <i className="far fa-play-circle"></i>
            </div>
            <div className="side-nav-icon-text">
              Subscriptions
            </div>
          </div>
        </Link>
        <div className="side-nav-big-links-container">
          <a href="https://github.com/GGMU1986" target="blank">
            <FontAwesomeIcon icon={faGithub} className="big link"/>
          </a>
          <a 
            href="https://www.linkedin.com/in/george-tsimis-a5986224/" 
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className="big link" id="in"/>
          </a>
          <a 
            href="https://angel.co/u/george-tsimis" 
            target="blank"
          >
            <FontAwesomeIcon icon={faAngellist} className="big link"/>
          </a>
          <a 
            href="https://ggmu1986.github.io/" 
            target="blank"
          >
            <img id="geo-icon" className="big link" src={window.pers_icon} alt="george-icon" />
          </a>
        </div>
        <div className="avatar-container">
          <img id="george" src={window.avatar} alt="george" />
        </div>
        <p className="created">
          Created by George Tsimis with Ruby on Rails, JavaScript,
          React, Redux, Amazon Web Services, Webpack, and Node.js
        </p>
      </div>
    )
  }
};

export default SideNavBig;