import React from 'react';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
  render() {
    return (
      <div className="side-nav">
        <Link to="">
          <div className="icon-cont">
            <div className="icon">
              <i className="fas fa-home"></i>
            </div>
            <div className="icon-text">
              Home
            </div>
          </div>
        </Link >
        <Link to="">
          <div className="icon-cont">
            <div className="icon">
              <i className="far fa-compass"></i>
            </div>
            <div className="icon-text">
              Explore
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="icon-cont">
            <div className="icon">
              <i className="far fa-play-circle"></i>
            </div>
            <div className="icon-text">
              Subscriptions
            </div>
          </div>
        </Link>
        <Link to="">
          <div className="icon-cont">
            <div className="icon">
              <i className="far fa-folder"></i>
            </div>
            <div className="icon-text">
              Library
            </div>
          </div>
        </Link>
      </div>
    )
  }
};

export default SideNav