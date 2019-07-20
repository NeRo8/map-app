import React from 'react';
import { Route, Link, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import Menu from '../components/Menu/Menu.js';

import Home from '../screens/HomeScreen/Home.js';
import About from '../screens/AboutScreen/About.js';
import Auth from '../screens/AuthScreen/AuthScreen.js';

import store from '../store/store';

import styles from './styles.css';

const history = createBrowserHistory();

const routing = (
  <Provider store={store}>
    <Router history={history}>
      <div className={'content'}>
        <Menu />
        <div>
          <Route exact path="/" component={Auth} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  </Provider>
);

export default routing;
