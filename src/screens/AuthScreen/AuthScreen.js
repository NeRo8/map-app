import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginAction } from '../../actions/auth';

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
    const { authStore } = this.props;
    event.preventDefault();

    if (login.length > 0 && password.length > 0) {
      authStore.users.map((user, index) => {
        if (login == user.username && password == user.password) {
          this.props.onLoginClick(login);
          this.props.history.push('/home');
        }
      });
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

const mapStateToProps = state => ({
  authStore: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    onLoginClick: login => {
      dispatch(loginAction(login));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Auth));
