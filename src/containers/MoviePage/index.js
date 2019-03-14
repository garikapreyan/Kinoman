import { connect } from 'react-redux';

import MoviePage from '../../components/MoviePage';

const mapStateToProps = state => ({
  movies: state.movies
});

export default connect(mapStateToProps)(MoviePage);