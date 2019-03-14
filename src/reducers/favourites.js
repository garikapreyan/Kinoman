import {
  ADD_TO_FAVOURITES, RECEIVE_FAVOURITES,
  REMOVE_FROM_FAVOURITES, REQUEST_FAVOURITES
} from '../constants';

const initialState = [];

export const favourites = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES: {
      const { movieId } = action.payload;
      return state.some(item => item === movieId) ? [...state] : [movieId, ...state];
    }
    case REMOVE_FROM_FAVOURITES: {
      const { movieId } = action.payload;
      return state.filter(item => item !== movieId);
    }
    default:
      return state;
  }
};

export const isFavouritesFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_FAVOURITES:
      return true;
    case RECEIVE_FAVOURITES:
      return false;
    default:
      return false;
  }
};

export const favouriteMovies = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_FAVOURITES:
      return state.some(movie => movie.id === action.payload.id) ? [...state] : [{ isFavourite: true, ...action.payload }, ...state];
    case REMOVE_FROM_FAVOURITES:
      return state.filter(movie => movie.id !== action.payload.movieId);
    default:
      return state;
  }
};