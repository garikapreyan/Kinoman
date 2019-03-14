import { connect } from 'react-redux';

import Movies from '../../components/Movies';
import {
  getMovies,
  addToFavourites,
  removeFromFavourites
} from '../../actions';

const mapStateToProps = state => ({
  movies: state.movies,
  isMoviesFetching: state.isMoviesFetching,
  curPage: state.nextPrevPage.curPage,
  favourites: state.favourites
});

const mapDispatchToProps = dispatch => ({
  getMovies: (curPage, favourites) => dispatch(getMovies(curPage, favourites)),
  addToFavourites: (id) => dispatch(addToFavourites(id)),
  removeFromFavourites: (id) => dispatch(removeFromFavourites(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);