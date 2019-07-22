const users = [
  { username: 'nero', password: '1234', login: false },
  { username: 'lite', password: '1234', login: false },
  { username: 'dante', password: '1234', login: false },
  { username: 'valeriy-leontiev', password: '1234', login: false }
];

const initialState = {
  users: users,
  username: '',
  login: false
};

function auth(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN': {
      console.log('LOGIN');
      return { ...state, login: true };
    }
    default:
      return state;
  }
}

export default auth;
