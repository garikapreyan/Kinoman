import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import injectSheet from 'react-jss';

import styles from './styles';

class Movie extends Component {
  constructor(props) {
    super(props);

    this.favourite = this.favourite.bind(this);
  }

  favourite(isFavourite, movieId) {
    const { addToFavourites, removeFromFavourites } = this.props;
    isFavourite ? removeFromFavourites(movieId) : addToFavourites(movieId);
  }

  render() {
    const { movie, classes } = this.props;
    return (
      <Fragment>
        <Link to={`/Kinoman/movie/${movie.id}`} className={classes.movie}>
          <img className={classes.img} src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title}/>
          <p className={classes.movieName}>{movie.title}</p>
        </Link>
        <i className={`fa ${movie.isFavourite ? 'fa-heart' : 'fa-heart-o'} ${classes.icon}`}
           aria-hidden="true"
           onClick={() => this.favourite(movie.isFavourite, movie.id)}/>
      </Fragment>
    );
  }
}

export default injectSheet(styles)(Movie);