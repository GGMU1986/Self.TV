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
         <Link to="">
          <div className="side-nav-icon-cont">
            <div className="icon2">
              <i className="fas fa-home"></i>
            </div>
            <div className="side-nav-icon-text">
              Home
            </div>
          </div>
        </Link >
        <Link to="">
          <div className="side-nav-icon-cont">
            <div className="icon2">
              <i className="far fa-compass"></i>
            </div>
            <div className="side-nav-icon-text">
              Explore
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="side-nav-icon-cont">
            <div className="icon2">
              <i className="far fa-play-circle"></i>
            </div>
            <div className="side-nav-icon-text">
              Subscriptions
            </div>
          </div>
        </Link>
        <hr />
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
        <img src="" alt="" />
        <p>
          Created by George Tsimis with Ruby on Rails, JavaScript,
          React, Redux, Amazon Web Services, Webpack, and Node.js
        </p>
      </div>
    )
  }
};

export default SideNavBig;