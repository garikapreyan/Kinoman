import fetch from 'cross-fetch'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from "../constants";

const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
};

const receivePosts = (data, favourites) => ({
  type: RECEIVE_POSTS,
  payload: {
    data: data.results,
    favourites
  }
});

export const getMovies = (curPage, favourites) => {
  console.log('Favs1', favourites);
  return dispatch => {
    dispatch(requestPosts());
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=418a2c57e3a40a68638d0017f189fca9&language=en-US&page=${curPage}`)
      .then(response => response.json())
      .then(data => dispatch(receivePosts(data, favourites)))
  }
};


