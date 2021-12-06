import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session';
import Signup from './signup';

const mSTP = state => ({
  user: {
    username: '',
    email: '',
    password: ''
  },
  errors: state.errors
});

const mDTP = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(Signup);