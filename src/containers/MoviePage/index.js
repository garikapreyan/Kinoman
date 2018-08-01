import { connect } from 'react-redux';

import MoviePage from '../../components/MoviePage';

const mapStateToProps = state => {
  const { items } = state.postsByMovie.movie;
  return {
    items
  };
};

export default connect(mapStateToProps)(MoviePage);