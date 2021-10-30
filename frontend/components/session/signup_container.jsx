import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import Signup from './signup';

const mSTP = state => ({
  user: {
    username: '',
    email: '',
    password: ''
  }
})

const mDTP = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(Signup);