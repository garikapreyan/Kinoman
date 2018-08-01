import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions/actions';

import {LOGIN_ACTION, LOGOUT_ACTION, NEXT_PAGE, PREV_PAGE} from '../actions';

const initialState = {
  username: '',
  password: '',
  isAuth: false
};

const LogInLogOut = (state = initialState, action) => {

  switch(action.type) {
    case LOGIN_ACTION:
      return action.payload;
    case LOGOUT_ACTION:
      return initialState;
    default:
      return state;
  }
};


function posts(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
      });
    default:
      return state;
  }
}

export function postsByMovie(state = { movie: { items: [] } }, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        movie: posts(state[action.movie], action)
      });
    default:
      return state
  }
}

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
      return state;
  }
}

const rootReducer = combineReducers({
  postsByMovie,
  LogInLogOut,
  nextPrevPage,
  form: formReducer
});

export default rootReducer;