import { connect } from 'react-redux';
import { login } from '../../actions/session';
import Signin from './Signin'

const mSTP = state => ({
  user: {
    username: '',
    password: ''
  },
  errors: state.errors
})

const mDTP = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(Signin);