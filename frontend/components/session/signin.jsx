import React from 'react';
import { Link } from 'react-router-dom';

class Signin extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.user
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  };

  handleSubmit(e) {
    e.preventDefault()
    this.props.login(this.state)
      .then(() => this.props.history.push('/'))
  };

  render() {
    return (
      <div className="session">
        <h3>Georgle</h3>
        <h3>Sign in</h3>
        <p>to continue to Self.TV</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.update('username')}
            placeholder="Username"
          />

          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"
          />
          <div className="session-option">
            <Link to="/signup">Create account</Link>
            <button onClick={this.handleSubmit}>Sign in</button>
          </div>
        </form>
      </div>
    )
  }
};

export default Signin;