import { connect } from 'react-redux';

import Favourites from '../../components/Favourites';

import {
  getFavouriteMovies
} from '../../actions';

const mapStateToProps = (state) => ({
  favourites: state.favourites,
  favouriteMovies: state.favouriteMovies,
  isFavouritesFetching: state.isFavouritesFetching
});

const mapDispatchToProps = (dispatch) => ({
  getFavouriteMovies: (ids) => dispatch(getFavouriteMovies(ids))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);