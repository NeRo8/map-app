import React, { Component } from 'react';

import Worker from '../../components/Worker/Worker';

import './styles.css';

class About extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="elm-head" />
        <div className="elm-worker">
          <Worker />
          <Worker />
          <Worker />
          <Worker />
        </div>
      </div>
    );
  }
}

export default About;
