import React from 'react';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
  render() {
    return (
      <div className="side-nav">
        <Link to="">
          <i class="fas fa-home"></i>
          <br />
          Home
        </Link >
        <Link to="">
          <i class="far fa-compass"></i>
          <br />
          Explore
        </Link>
        <Link to="">
          
          Subscriptions
        </Link>
        <Link to="">
          <br />
          <i class="fas fa-folder"></i>
          Library
        </Link>
      </div>
    )
  }
};

export default SideNav