import React, { Component } from 'react';
import Maps from '../../components/Maps/Maps.js';
import { connect } from 'react-redux';

import './styles.css';

class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="maps">
        <Maps />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authStore: state.auth
});

const mapDispatchToProps = dispatch => ({
  loginAction: () => dispatch(loginAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
