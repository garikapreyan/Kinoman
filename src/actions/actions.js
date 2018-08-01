import fetch from 'cross-fetch';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function requestPosts(movie) {
  return {
    type: REQUEST_POSTS,
    movie
  }
}

function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.results.map(child => child)
  }
}

export const fetchPosts = (movie, curPage) => {
  return dispatch => {
    dispatch(requestPosts(movie));
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=418a2c57e3a40a68638d0017f189fca9&language=en-US&page=${curPage}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
};


