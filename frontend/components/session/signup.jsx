import React from 'react';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.user
    this.handleSubmit= this.handleSubmit.bind(this)
    this.handleDemo = this.handleDemo.bind(this)

  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  handleDemo(e) {
    let demo = {
      username: 'demomode',
      password: "demomode"
    }
    e.preventDefault();
    this.props.login(demo)
      .then(() => this.props.history.push('/'))
  };

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
      <div className="session-form-container">
        <h3 className="georgle">
          <span className="g">
            G
          </span>
          <span className="e">
            e
          </span>
          <span className="o">
            o
          </span>
          <span className="o">
            r
          </span>
          <span className="g">
            g
          </span>
          <span className="l">
            l
          </span> 
          <span className="e">
            e
          </span>

        </h3>
        <h3 className="create">Create your Georgle Account</h3>
        <p>to continue to Self.TV</p>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="email"
            value={this.state.email}
            onChange={this.update('email')}
            placeholder="Your email address"
          />
          <br /><br />
          <input 
            type="text"
            value={this.state.username}
            onChange={this.update('username')} 
            placeholder="Username"
          />
          <br /><br />
          <input 
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="Password"
          />
          <div className="session-errors">
          <div className="errors">
            {this.renderErrors()}
          </div>
          </div>
            <p>Just looking? Try Demo mode below to preview</p>
          <Link 
            to="" className="session-links" 
            onClick={this.handleDemo}
          >
            Demo mode
          </Link>
            <br /><br />
          <div className="session-option">
            <Link className="session-links" to="/signin">Sign In instead</Link>
             
            <button 
              onClick={this.handleSubmit}
            >
              Create account
            </button>
          </div>
        </form>
      </div>
    )
  }
};

export default Signup;