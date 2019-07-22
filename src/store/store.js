import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import todoApp from '../reducers/index';

const store = createStore(todoApp, applyMiddleware(thunk, logger));

export default store;
