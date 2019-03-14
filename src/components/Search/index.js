import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';

import Movie from "../../containers/Movie";
import Pagination from "../Pagination";
import Loader from "../Loader";

import styles from './styles';
import NavBar from "../NavBar";

class Search extends Component {
  componentDidMount() {
    const { getSearch, curPage, match, favourites } = this.props;
    console.log(curPage, match.params.query);
    getSearch(match.params.query, curPage, favourites);
  }

  componentDidUpdate(prevProps) {
    const { getSearch, curPage, favourites } = this.props;
    if(prevProps.curPage !== curPage) {
      const { query } = this.props.match.params;
      getSearch(query, curPage, favourites);
    }
  }

  render() {
    const { classes, movies, isMoviesFetching } = this.props;
    return (
      <Fragment>
        <NavBar history={this.props.history}/>
        {
          !isMoviesFetching ? (
            movies.length ?
              <div className={classes.popular}>
                {movies.map((movie, i) => <Movie movie={movie} key={i}/>)}
                <Pagination/>
              </div> : <h3 className={classes.noMovies}>Movies not found!</h3>
          ) : (
            <Loader/>
          )
        }
      </Fragment>
    );
  }
}

export default injectSheet(styles)(Search);