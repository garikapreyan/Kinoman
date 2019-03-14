import { connect } from 'react-redux';

import Movie from '../../components/Movie';
import {addToFavourites, removeFromFavourites} from "../../actions";

const mapDispatchToProps = dispatch => ({
  addToFavourites: (id) => dispatch(addToFavourites(id)),
  removeFromFavourites: (id) => dispatch(removeFromFavourites(id))
});

export default connect(undefined, mapDispatchToProps)(Movie);