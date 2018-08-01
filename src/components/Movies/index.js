import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import Pagination from "../Pagination";
import styles from './styles';

class Movies extends Component {
  render() {
    const { classes, posts } = this.props;
    return (
      <div>
        <div className={classes.popular}>
          {posts.map((movie, i) => (<Link to={`movie/${movie.id}`} key={i} className={classes.movie} onClick={this.handleMovieSubmit}>
              <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title}/>
              <p className={classes.movieName}>{movie.title}</p>
            </Link>)
          )}</div>
        <div><Pagination/></div>
      </div>
    );
  }
}

export default injectSheet(styles)(Movies);