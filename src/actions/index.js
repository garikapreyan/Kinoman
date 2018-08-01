export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGOUT_ACTION = 'LOGOUT_ACTION';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';


export function logInAction(state) {
  return {
    type: LOGIN_ACTION,
    payload: state
  };
}

export function logOutAction() {
  return {
    type: LOGOUT_ACTION
  }
}

export function nextPageAction(page) {
  return {
    type: NEXT_PAGE,
    payload: page
  };
}

export function prevPageAction(page) {
  return {
    type: PREV_PAGE,
    payload: page
  };
}