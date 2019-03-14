import {
  REQUEST_SEARCH,
  RECEIVE_SEARCH
} from "../constants";


const searchedMovies = (state = [], action) => {
  switch (action.type) {
    case REQUEST_SEARCH:
      return [];
    case RECEIVE_SEARCH:
      return action.payload.data.map(item => ({
        ...item,
        isFavourite: action.payload.favourites.some(movie => movie === item.id)
      }));
    default:
      return [];
  }
};

export default searchedMovies;