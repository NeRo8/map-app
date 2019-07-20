import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './styles.css';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    const { login, password } = this.state;
    event.preventDefault();
    if (login == 'nero' && password == '1234') {
      this.props.history.push('/home');
    }
  };

  render() {
    return (
      <div className={'auth-container'}>
        <form className={'form'} onSubmit={this.handleSubmit}>
          <label className={'label-input'}>
            Login: <br />
            <input
              id="login"
              className={'input'}
              value={this.state.login}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label className={'label-input'}>
            Password: <br />
            <input
              id="password"
              className={'input'}
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <input type="submit" title="Log in" className={'button-submit'} />
        </form>
      </div>
    );
  }
}

export default withRouter(Auth);
