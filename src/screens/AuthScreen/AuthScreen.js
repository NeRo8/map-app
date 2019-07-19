import React, { Component } from 'react';

import './styles.css';

class Auth extends Component {
  render() {
    return (
      <div className={'auth-container'}>
        <form className={'form'}>
          <label className={'label-input'}>
            Login: <br />
            <input className={'input'} />
          </label>
          <br />
          <br />
          <label className={'label-input'}>
            Password: <br />
            <input className={'input'} />
          </label>
          <br />
          <input type="submit" title="Log in" className={'button-submit'} />
        </form>
      </div>
    );
  }
}

export default Auth;
