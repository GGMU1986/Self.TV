import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {/* <FontAwesomeIcon icon="fa-brands fa-youtube" /> */}
        <p>Self.TV</p>
        <input type="text" placeholder="Seach" />
        <br /><br />
        <button>SIGN IN</button>
      </div>
    )
  }
}

export default Header;