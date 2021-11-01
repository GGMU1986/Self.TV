import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session';

class Header extends React.Component {
  render() {
    const { currentUser, logout } = this.props;
    return (
      <div className="header">
        <p>Self.TV</p>
        <input type="text" placeholder="Seach" />
        <br /><br />
        {
          currentUser ? (
            <button onClick={() => logout()}>SIGN OUT</button>
          ) : (
            <Link to="/signin">SIGN IN</Link>
          )
        }
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
