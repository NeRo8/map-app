import { combineReducers } from 'redux';
import auth from './auth';

const initialState = {};

function index(state = initialState, action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  return state;
}

const todoApp = combineReducers({
  auth,
  index
});

export default todoApp;
