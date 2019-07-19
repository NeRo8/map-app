import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      </div>
    );
  }
}

export default Menu;
