import { LOGIN, LOGOUT, REGISTRATION } from '../actions/auth';

const users = [
  { username: 'nero', password: '1234', login: false },
  { username: 'lite', password: '1234', login: false },
  { username: 'dante', password: '1234', login: false },
  { username: 'valeriy-leontiev', password: '1234', login: false }
];

const initialState = {
  users: users
};

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        users: state.users.map(user =>
          user.username === action.payload
            ? // transform the one with a matching id
              { ...user, login: true }
            : // otherwise return original todo
              user
        )
      };
    }
    case LOGOUT: {
      return {
        ...state,
        users: state.users.map(user =>
          user.username === action.payload
            ? // transform the one with a matching id
              { ...user, login: false }
            : // otherwise return original todo
              user
        )
      };
    }
    case REGISTRATION: {
      return { ...state, users: [...state.users, action.payload] };
    }
    default:
      return state;
  }
}

export default auth;
