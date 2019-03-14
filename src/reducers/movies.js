import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  REQUEST_SEARCH,
  RECEIVE_SEARCH
} from "../constants";


export const isMoviesFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return true;
    case RECEIVE_POSTS:
      return false;
    case REQUEST_SEARCH:
      return true;
    case RECEIVE_SEARCH:
      return false;
    default:
      return false;
  }
};
const initialState = [];

export const movies = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return initialState;
    case RECEIVE_POSTS:
      return action.payload.data.map(item => ({
        ...item,
        isFavourite: action.payload.favourites.some(movie => movie === item.id)
      }));
    case ADD_TO_FAVOURITES:
      return state.map(item => item.id === action.payload.movieId ? {
        ...item,
        isFavourite: true
      } : item);
    case REMOVE_FROM_FAVOURITES:
      return state.map(item => item.id === action.payload.movieId ? {
        ...item,
        isFavourite: false
      } : item);
    default:
      return initialState;
  }
};