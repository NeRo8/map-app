import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import styles from './styles.css';

class Menu extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/home" className={'nav-link'}>
          Home
        </Link>
        <Link to="/about" className={'nav-link'}>
          About
        </Link>

        {this.props.user ? (
          <Link className={'user-nav-link'}>
            Hi, {this.props.user.username}
          </Link>
        ) : (
          <Link className={'user-nav-link'}>Plz Login</Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.users.find(user => user.login === true)
});

export default connect(mapStateToProps)(Menu);
