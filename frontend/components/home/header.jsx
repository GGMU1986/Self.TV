import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <p>Self.TV</p>
        <input type="text" placeholder="Seach" />
        <br /><br />
        <Link to="/signup">SIGN IN</Link>
      </div>
    )
  }
}

export default Header;