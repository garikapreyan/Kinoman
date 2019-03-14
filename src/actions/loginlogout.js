import {
  LOGIN_ACTION,
  LOGOUT_ACTION
} from '../constants';

export const logInAction = (state) => ({
  type: LOGIN_ACTION,
  payload: state
});

export const logOutAction = () => ({
  type: LOGOUT_ACTION
});
