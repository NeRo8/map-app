import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import Menu from './components/Menu/Menu.js';

import Home from './screens/HomeScreen/Home.js';
import About from './screens/AboutScreen/About.js';
import Auth from './screens/AuthScreen/AuthScreen.js';

import styles from './style.css';

const routing = (
  <Router>
    <div className={'content'}>
      <Menu />
      <div>
        <Route exact path="/" component={Auth} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
