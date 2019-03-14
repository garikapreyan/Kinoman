import { connect } from 'react-redux';

import Search from '../../components/Search';

import {
  getSearch
} from '../../actions'

const mapStateToProps = state => ({
  movies: state.searchedMovies,
  isMoviesFetching: state.isMoviesFetching,
  curPage: state.nextPrevPage.curPage,
  favourites: state.favourites
});

const mapDispatchToProps = dispatch => ({
  getSearch: (str, curPage, favourites) => dispatch(getSearch(str, curPage, favourites))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);