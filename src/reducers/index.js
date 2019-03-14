import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  isMoviesFetching,
  movies
} from './movies';
import {
  LogInLogOut,
  nextPrevPage,
} from "./reducers";
import {
  favourites,
  favouriteMovies,
  isFavouritesFetching
} from './favourites';
import searchedMovies from './search';

export default combineReducers({
  isMoviesFetching,
  movies,
  LogInLogOut,
  nextPrevPage,
  favourites,
  favouriteMovies,
  isFavouritesFetching,
  searchedMovies,
  form: formReducer
})