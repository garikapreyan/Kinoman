import fetch from 'cross-fetch';

import {
  REQUEST_SEARCH,
  RECEIVE_SEARCH
} from '../constants';

const requestSearch = () => ({
  type: REQUEST_SEARCH
});

const receiveSearch = (data, favourites) => ({
  type: RECEIVE_SEARCH,
  payload: {
    data: data.results,
    favourites
  }
});

const getSearch = (str, curPage, favourites) => {
  return (dispatch) => {
    dispatch(requestSearch());
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=418a2c57e3a40a68638d0017f189fca9&language=en-US&query=${str}&page=${curPage}&include_adult=false`)
      .then(res => res.json())
      .then(data => dispatch(receiveSearch(data, favourites)));
  }
};

export default getSearch;