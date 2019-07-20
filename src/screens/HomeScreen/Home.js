import React, { Component } from 'react';
import Maps from '../../components/Maps/Maps.js';

import './styles.css';

class Home extends Component {
  render() {
    return (
      <div className="maps">
        <Maps />
      </div>
    );
  }
}

export default Home;
