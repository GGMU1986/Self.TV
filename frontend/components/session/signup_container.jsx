import { connect } from 'react-redux';
import { signup, login } from '../../actions/session';
import Signup from './signup';

const mSTP = state => ({
  user: {
    username: '',
    email: '',
    password: ''
  }
});

const mDTP = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(Signup);