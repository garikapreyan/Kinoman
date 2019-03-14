import {LOGIN_ACTION, LOGOUT_ACTION, NEXT_PAGE, PREV_PAGE} from '../constants';

const initialState = {
  username: '',
  password: '',
  isAuth: false
};

export const LogInLogOut = (state = initialState, action) => {

  switch(action.type) {
    case LOGIN_ACTION:
      return action.payload;
    case LOGOUT_ACTION:
      return initialState;
    default:
      return state;
  }
};

export function nextPrevPage(state = {curPage: 1}, action) {
  switch(action.type) {
    case PREV_PAGE:
      return Object.assign({}, state, {
        curPage: action.payload
      });
    case NEXT_PAGE:
      return Object.assign({}, state, {
        curPage: action.payload
      });
    default:
      return {curPage: 1};
  }
}