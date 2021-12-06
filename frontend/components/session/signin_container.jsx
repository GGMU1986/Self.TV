import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session';
import Signin from './signin'

const mSTP = state => ({
  user: {
    username: '',
    password: ''
  },
  errors: state.errors
})

const mDTP = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(Signin);