import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors;
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => {
          return <li key={`session-error-${i}`}>{error}</li>;
        })}
      </ul>
    );
  }

  render() {
    if (this.props.formType === 'login') {
      return (
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          <div className='login-signup'>
            <Link to='/signup'>Join Vine</Link>
            <p>|</p>
            <p>Log In</p>
          </div>
          <div className='login-form'>
            <input
              type='text'
              value={this.state.email}
              onChange={this.update('email')}
              placeholder='Type your email'
              className='login-input'
            />

            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
              placeholder='Type your password'
              className='login-input'
            />

            <div className='session-errors'>{this.renderErrors()}</div>

            <button
              className='login-button'
              type='submit'
              value={this.props.formType}
            >
              Log in
            </button>

            <div>
              <p>Don't have a profile</p>
              <Link to='/signup'>Join Vine</Link>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit} className='signup-form-box'>
          <div className='login-signup'>
            <p>Join Vine</p>
            <p>|</p>
            <Link to='/login'>Log In</Link>
          </div>
          <div className='signup-form'>
            <input
              type='text'
              value={this.state.email}
              onChange={this.update('email')}
              placeholder='Please enter your email'
              className='signup-input'
            />

            <input
              type='text'
              value={this.state.fname}
              onChange={this.update('fname')}
              placeholder='First Name'
              className='login-input'
            />

            <input
              type='text'
              value={this.state.lname}
              onChange={this.update('lname')}
              placeholder='Last Name'
              className='login-input'
            />

            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
              placeholder='Set a password'
              className='login-input'
            />

            <div className='session-errors'>{this.renderErrors()}</div>

            <button
              className='login-button'
              type='submit'
              value={this.props.formType}
            >
              Join Vine
            </button>
          </div>
        </form>
      );
    }
  }
}

export default SessionForm;
