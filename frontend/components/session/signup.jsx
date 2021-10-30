import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.user
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  };

  handleSubmit(e) {
    e.preventDefault()
    this.props.signup(this.state)
      .then(() => this.props.history.push('/'))
  };

  render() {
    return (
      <div className="session">
        <h3>Georgle</h3>
        <h3>Create your Georgle Account</h3>
        <p>to contibue to Self.TV</p>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            value={this.state.username}
            onChange={this.update('username')} 
            placeholder="Username"
          />
        
          <input 
            type="email"
            value={this.state.email}
            onChange={this.update('email')}
            placeholder="Email"
          />
      
          <input 
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"
          />
          <div className="session-option">
            <Link to="/signin">Sign In instead</Link>
            <button onClick={this.handleSubmit}>Create account</button>
          </div>
        </form>
      </div>
    )
  }
};

export default Signup;