import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';

import Pagination from "../Pagination";
import styles from './styles';
import Movie from "../../containers/Movie";
import Loader from "../Loader";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavourite: false
    };
  }

  componentDidMount() {
    const { getMovies, curPage, favourites } = this.props;
    console.log('Favs',favourites);
    getMovies(curPage, favourites);
  }

  componentDidUpdate(prevProps) {
    const { getMovies, curPage, favourites } = this.props;
    if(prevProps.curPage !== curPage) {
      getMovies(curPage, favourites);
    }
  }

  render() {
    const { classes, movies, isMoviesFetching } = this.props;
    return (
      <Fragment>
        {
          !isMoviesFetching ? (
            <div className={classes.popular}>
              {movies.map((movie, i) => <Movie movie={movie} key={i}/>)}
              <Pagination/>
            </div>
          ) : (
            <Loader/>
          )
        }
      </Fragment>
    );
  }
}

export default injectSheet(styles)(Movies);