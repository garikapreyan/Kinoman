import React, { Component } from 'react';
import injectSheet from 'react-jss';

import styles from './styles';
import NavBar from '../../containers/NavBar';

class MoviePage extends Component {
  getMovie = () => {
    const { items } = this.props;
    const { id } = this.props.match.params;
    const movie = items.filter((item) => (item.id.toString()===id.toString()));
    return movie.length !== 0 ? movie[0] : [{}];
  };

  render() {
    const movie = this.getMovie();
    const { classes } = this.props;
    return (
      <div>
        <NavBar/>
        <div className={classes.root} style={{backgroundImage: `url("http://image.tmdb.org/t/p/w185/${movie.backdrop_path}")`}}>
          <h1 className={classes.title}>{movie.title}</h1>
          <div className={classes.description}>
            <img className={classes.image} src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title}/>
            <p className={classes.overview}>{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(MoviePage);