import React from 'react';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
  render() {
    return (
      <div className="side-nav">
        <Link to="">
          Home
        </Link >
        <Link to="">
          Explore
        </Link>
        <Link to="">
          Subscriptions
        </Link>
        <Link to="">
          Library
        </Link>
      </div>
    )
  }
};

export default SideNav