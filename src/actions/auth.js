export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTRATION = 'REGISTRATION';

export function loginAction(username) {
  return {
    type: LOGIN,
    payload: username
  };
}

export function logoutAction() {
  return {
    type: LOGOUT
  };
}

export function registrationAction(user) {
  return {
    type: REGISTRATION,
    payload: user
  };
}
