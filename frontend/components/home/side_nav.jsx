import React from 'react';
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
  render() {
    return (
      <div className="side-nav">
        <Link>
          Home
        </Link>
        <Link>
          Explore
        </Link>
        <Link>
          Subscriptions
        </Link>
        <Link>
          Library
        </Link>
      </div>
    )
  }
};

export default SideNav