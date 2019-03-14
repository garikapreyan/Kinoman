import fetch from 'cross-fetch';
import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  REQUEST_FAVOURITES,
  RECEIVE_FAVOURITES
} from '../constants';

export const addToFavourites = (movieId) => ({
  type: ADD_TO_FAVOURITES,
  payload: {
    movieId
  }
});

export const removeFromFavourites = (movieId) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: {
    movieId
  }
});

const requestFavourites = () => ({
  type: REQUEST_FAVOURITES
});

const receiveFavourites = (movie) => ({
  type: RECEIVE_FAVOURITES,
  payload: movie
});

export const getFavouriteMovies = (ids) => {
  return dispatch => {
    if(ids.length)
      dispatch(requestFavourites());
    ids.forEach(id => {
      fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=418a2c57e3a40a68638d0017f189fca9&language=en-US`)
        .then(res => res.json())
        .then(data => dispatch(receiveFavourites(data)));
     });
  }
};